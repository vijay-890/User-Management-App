const express = require("express");
const router = express.Router();

// Dummy database array
let users = [
  { id: 1, name: "Arun", email: "arun@gmail.com" },
  { id: 2, name: "Bala", email: "bala@gmail.com" }
];

// GET: Fetch all users
router.get("/", (req, res) => {
  res.json({ success: true, data: users });
});

// GET: Fetch user by ID (Route Parameter)
router.get("/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);
  
  if (!user) {
    return res.status(404).json({ success: false, message: "User not found" });
  }
  
  res.json({ success: true, data: user });
});

// POST: Create a new user
router.post("/create", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email
  };
  
  users.push(newUser);
  res.status(201).json({ success: true, message: "User created", data: newUser });
});

// DELETE: Delete user by ID
router.delete("/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.filter(u => u.id !== userId);
  
  res.json({ success: true, message: `User with ID ${userId} deleted successfully` });
});

module.exports = router;