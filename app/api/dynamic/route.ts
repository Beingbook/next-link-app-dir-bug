import fs from "fs/promises";

async function saveToLocalJson(data) {
  try {
    const jsonString = JSON.stringify(data, null, 2);
    await fs.writeFile("./body.json", jsonString);
    console.log("Data saved to body.json");
  } catch (error) {
    console.error("Error writing to file:", error);
  }
}

export async function POST(request: Request) {
  const body = await request.json();
  await saveToLocalJson(body);
  return new Response(JSON.stringify(body), { status: 200 });
}
