const express = require('express');
const User = require('../db/userModel')

const router = express.Router();

// GET all users
router.get("/", async (req, res) => {
    try {
        const allUsers = await User.find();
        console.log(allUsers);
        res.status(200).json(allUsers); // Use status and JSON for proper API response
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error retrieving users" });
    }
});


// POST create a new user
router.post("/createUser", async (req, res) => {
    const { name, email, address } = req.body;

    try {
        const newUser = new User({ name, email, address });
        const savedNewUser = await newUser.save();

        console.log(savedNewUser);
        res.status(201).json(savedNewUser); // Use status 201 for creation
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Error creating user" });
    }
});


// PUT update a user by ID
router.put("/update/:id", async (req, res) => {
    const { id } = req.params;
    const { name, email, address } = req.body;

    try {
        const updatedUser = await User.findByIdAndUpdate(
            id,
            { name, email, address },
            { new: true } // Return the updated document
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        console.log(updatedUser);
        res.status(200).json(updatedUser);
    } catch (error) { console.error(error);
        res.status(400).json({ message: "Error updating user" });
    }
});

module.exports = router;