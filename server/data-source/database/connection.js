const { Sequelize } = require("sequelize");

const createConnection = ({ host, username, password, dbname, dialect }) => {
  // init connection
  const connection = new Sequelize({
    host,
    database: dbname,
    username,
    password,
    dialect /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
  });

  try {
    connection.authenticate();

    console.log("database connection established");
  } catch (err) {
    console.error("failed to connect database", err);
  }

  return connection;
};

module.exports = createConnection;
