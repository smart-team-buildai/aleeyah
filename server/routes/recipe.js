const express = require("express");
const router = express.Router();
const { generateRecipes, saveRecipe } = require("../controllers/recipe");

// Route to generate recipes based on user input
router.post("/generate", async (req, res) => {
  try {
    const userInput = req.body.ingredients;
    const recipes = await generateRecipes(userInput);
    res.json({ recipes });
  } catch (error) {
    console.error("Error generating recipes:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

// Route to save a recipe as a favorite for a user
router.post("/save", async (req, res) => {
  try {
    const { title, ingredients, instructions, imageUrl, userId } = req.body;
    await saveRecipe(title, ingredients, instructions, imageUrl, userId);
    res.status(200).json({ message: "Recipe saved successfully" });
  } catch (error) {
    console.error("Error saving recipe:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
