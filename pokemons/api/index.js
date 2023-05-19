
const server = require('./src/app.js');
const { conn } = require('./src/db.js');



// Syncing all the models at once.
// force : true will drop the table if it already exists VALOR POR DEFECTO
// force : false will not drop the table if it already exists
conn.sync({ force: false }).then(() => {
  server.listen(3001, () => {
    console.log('Server listening at 3001'); // eslint-disable-line no-console
  });
});
