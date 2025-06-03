"use server"
import { promises as fs } from "fs";
import path from "path";

const getFilePath = (filename) =>
  path.join(process.cwd(), "src", "app", "utils", "cache", `${filename}.json`);

export const readFile = async (filename) => {
  try {
    const filePath = getFilePath(filename);
    const fileContents = await fs.readFile(filePath, "utf8");
    if (!fileContents) {
      return {
        type: "fail",
        success: false,
        message: "Did not find anything",
      };
    }

    return {
      type: "success",
      success: true,
      message: "Successfully retrieved",
      data: JSON.parse(fileContents), // Fixed typo: json.parse -> JSON.parse
    };
  } catch (err) {
    console.error("Encountered an error", err);
    return {
      type: "error",
      success: false,
      message: "Error encountered",
    };
  }
};

export const writeFile = async (data, filename) => {
  try {
    const filePath = getFilePath(filename);

    await fs.mkdir(path.dirname(filePath), { recursive: true });
    let finalData = data;

    if (existsSync(filePath)) {
      const fileContents = await fs.readFile(filePath, "utf8"); // Fixed: await missing
      if (fileContents.trim()) {
        const existingData = JSON.parse(fileContents);

        if (Array.isArray(existingData) && Array.isArray(data)) {
          finalData = [...existingData, ...data];
        } else if (
          typeof existingData === "object" &&
          typeof data === "object"
        ) {
          finalData = { ...existingData, ...data }; // Simple object merge
        }
      }
    }

    await fs.writeFile(filePath, JSON.stringify(finalData, null, 2));
    return {
      type: "success",
      success: true,
      message: `File ${filename} written/updated successfully`,
    };
  } catch (err) {
    console.error(`Error writing file ${filename}:`, err);
    return {
      type: "error",
      success: false,
      message: `Error writing file ${filename}: ${err.message}`,
    };
  }
};

