const { join } = require("path");
const { readFileSync } = require("fs");

const connection = require("./connection");

const build = () => {
  const sql = readFileSync(join(__dirname, "data.sql"), { encoding: "utf-8" });
  const seeds = readFileSync(join(__dirname, "schema.sql"), {
    encoding: "utf-8",
  });
  return connection.query(sql + seeds);
};
build()
  .then(() => console.log("database build successfully"))
  .catch((err) => console.log({ err }, "something went wrong!!"));
module.exports = build;