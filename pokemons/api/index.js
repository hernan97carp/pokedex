const server = require("./src/app.js");
const { conn } = require("./src/db.js");
require("dotenv").config();
// Syncing all the models at once.
// force : true will drop the table if it already exists VALOR POR DEFECTO
// force : false will not drop the table if it already exists
conn.sync({ force: false }).then(() => {
  server.listen(process.env.PORT, () => {
    console.log(`Server listening at ${process.env.PORT}`); // eslint-disable-line no-console
  });
});
