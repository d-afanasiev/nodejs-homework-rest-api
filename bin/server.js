const app = require("../app");
const connectMongo = require("../db/connection");

const PORT = process.env.PORT || 8081;

(async () => {
  try {
    await connectMongo();
    console.log("Database connection successful");
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
})();
