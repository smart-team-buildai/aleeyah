const axios = require("axios");
const Recipe = require("../models/Recipe");

// Function to generate recipes based on user input
exports.generateRecipes = async (req, res) => {
  try {
    const { ingredients } = req.body; // Extract ingredients from user input

    if (!ingredients || !Array.isArray(ingredients)) {
      return res
        .status(400)
        .json({ message: "Ingredients must be provided as an array" });
    }

    const apiKey = process.env.RECIPE_API_KEY; // RapidAPI API key

    // Make a request to the recipe API
    const response = await axios.get(
      "https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipes/search",
      {
        headers: {
          "x-rapidapi-host": "recipe-by-api-ninjas.p.rapidapi.com",
          "x-rapidapi-key": apiKey,
        },
        params: {
          ingredients: ingredients.join(","), // Pass ingredients as comma-separated string
        },
      }
    );

    const recipes = response.data.results; // Extract recipes from API response

    // Process the recipes as needed (e.g., extract title, ingredients, instructions, images)
    // Save favorite recipes to the database if required

    res.status(200).json({ recipes });
  } catch (error) {
    console.error("Error generating recipes:", error);
    res.status(500).json({ message: "Error generating recipes" });
  }
};

// Function to save favorite recipes
exports.saveFavoriteRecipe = async (req, res) => {
  try {
    const { title, ingredients, instructions, imageUrl } = req.body;
    const userId = req.user.id; // Assuming user ID is available in req.user

    // Create a new Recipe instance
    const recipe = new Recipe({
      title,
      ingredients,
      instructions,
      imageUrl,
      user: userId,
    });

    // Save the recipe to the database
    await recipe.save();

    res.status(201).json({ message: "Recipe saved successfully" });
  } catch (error) {
    console.error("Error saving recipe:", error);
    res.status(500).json({ message: "Error saving recipe" });
  }
};
