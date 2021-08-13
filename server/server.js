const app = require('./app.js');
const HOST = process.env.HOST ?? '127.0.0.1';
const PORT = process.env.PORT ?? 8083;

const startServer = async () => {
  try {
    // START SERVER
    app.listen(PORT, () => {
      console.log(`Server is listening on ${HOST}:${PORT}...\n`);
    });
  }
  catch (err) {
    console.log(err);
    console.log(err.stack);
  }
};

startServer();
