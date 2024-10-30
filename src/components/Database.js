import { Pool } from "pg";
import { dbConfig } from "../config/dbConfig";

class Database {
  constructor(queries) {
    if (!Database.instance) {
      this.initializePool();
      this.queries = queries;
      Database.instance = this;
      Object.freeze(Database.instance);
    }
    return Database.instance;
  }

  initializePool() {
    this.pool = new Pool(dbConfig);
  }

  async query(queryName, params) {
    const client = await this.pool.connect();
    try {
      const query = this.queries[queryName] || queryName,
        res = await client.query(query, params);
      return res;
    } catch (err) {
      console.error(`Error executing query:`, err);
      throw err;
    } finally {
      client.release();
    }
  }
}

export default Database;
