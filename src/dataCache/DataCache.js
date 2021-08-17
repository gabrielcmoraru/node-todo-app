import { writeJSONToFile, getJSONFromFile, pathExists } from './helpers.js';

const defaultDB = 'default.json';

class DataCache {
  constructor(dbName) {
    this.cache = this.initCacheDB(dbName);
  }

  async initCacheDB(filename = defaultDB) {
    const isNewFile = pathExists(filename);

    this.cache = isNewFile ? await getJSONFromFile(filename) : {};

    this.saveDataToFile(filename);
  }

  async saveDataToFile(filename = defaultDB) {
    if (filename) {
      try {
        await writeJSONToFile(filename, this.cache);

        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(this.saveDataToFile(filename));
          }, 1000);
        });
      } catch (error) {
        throw new Error(error);
      }
    }
  }

  getAllData() {
    return this.cache;
  }

  getData(id) {
    if (this.cache[id]) return this.cache[id];
  }

  addData(data) {
    this.cache[data.id] = data;

    return data;
  }

  updateData(id, newData) {
    if (this.cache[id] !== undefined) {
      this.cache[id] = { ...this.cache[id], ...newData };

      return this.cache[id];
    } else {
      throw 'Invalid ID';
    }
  }

  removeData(id) {
    if (this.cache[id] !== undefined) {
      const payload = this.cache[id];
      delete this.cache[id];

      return payload;
    } else {
      throw 'ID not found';
    }
  }
}

export default DataCache;
