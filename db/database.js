import * as SQLite from 'expo-sqlite';

export const db = SQLite.openDatabaseAsync('floralHelper.db');

export async function initDb() {
  const database = await db;

  await database.execAsync(`
    CREATE TABLE IF NOT EXISTS Items (
      Id INTEGER PRIMARY KEY AUTOINCREMENT,
      Content TEXT,
      IsCompleted INTEGER,
      Category TEXT
    );

    CREATE TABLE IF NOT EXISTS Expenses (
      Id INTEGER PRIMARY KEY AUTOINCREMENT,
      Day INTEGER,
      Month INTEGER,
      Year INTEGER,
      SpentValue REAL,
      ExtraExpense TEXT
    );
  `);
}
