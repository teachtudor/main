//code 3
import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const folder = searchParams.get("folder");

  if (!folder) {
    return NextResponse.json({ error: "Folder not specified" }, { status: 400 });
  }

  try {
    const filePath = path.join(process.cwd(), "public", folder, "files.json");
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const files = JSON.parse(fileContents);

    return NextResponse.json({ files });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Could not read files.json" }, { status: 500 });
  }
}
