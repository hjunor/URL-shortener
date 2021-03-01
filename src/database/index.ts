import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async (): Promise<Connection> => {

  if(process.env.NODE_ENV === 'test'){
  
    
    return createConnection({
      type: "sqlite",
      database: "src/database/datatest.sqlite",
      entities: ["./src/models/*.ts"],
      migrations: ["./src/database/migrations/*.ts"],
      cli: {
        migrationsDir: "./src/database/migrations"
      }});
  }

  const defaultOptions = await getConnectionOptions();

  return createConnection(defaultOptions);
}

