const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");

// Built-in Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Custom Logger Middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // Moves control to the next middleware or route
});

// Home Route
app.get("/", (req, res) => {
  res.send("Welcome to User Management API Server!");
});

// Mount User Routes
app.use("/users", userRoutes);

// Start Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});