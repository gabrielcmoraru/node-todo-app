import { promises as fs, existsSync } from 'fs';
import path from 'path';

const dbPath = 'db';

// Check file exits
const pathExists = (filename) =>
  existsSync(path.join(dbPath, filename), function (error) {
    if (error) {
      return false;
    } else {
      return true;
    }
  });

// Read from file
const getJSONFromFile = async (filename) => {
  const filePath = path.join(dbPath, filename);
  const data = await fs.readFile(filePath);

  return JSON.parse(data.toString());
};

// Write to file
const writeJSONToFile = async (filename, data) => {
  const filePath = path.join(dbPath, filename);
  const jsonData = JSON.stringify(data);

  await fs.writeFile(filePath, jsonData, { flag: 'w' });
};

export { getJSONFromFile, writeJSONToFile, pathExists };
