"use client";
import { useState, useEffect } from "react"; // Use useEffect for potential future data fetching
import axios from "axios";

const ChatBot = () => {
  const [error, setError] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const surpriseOptions = [
    "How to make Jollof Rice?",
    "Recipe for Egusi Soup?",
    "How to prepare Pounded Yam?",
    "Steps to make Nigerian Fried Rice?",
  ];

  const handleSurprise = () => {
    const randomIndex = Math.floor(Math.random() * surpriseOptions.length);
    setInputValue(surpriseOptions[randomIndex]);
  };

  const sendMessage = async () => {
    try {
      if (!inputValue.trim()) {
        setError("Please ask a question about your dietary needs.");
        return;
      }

      const response = await axios.post(
        "http://localhost:8000/recipes/generate",
        {
          history: chatHistory.map((item) => item.parts),
          message: inputValue,
        }
      );

      setChatHistory([
        ...chatHistory,
        { role: "user", parts: inputValue },
        { role: "model", parts: response.data },
      ]);
      setInputValue("");
      setError("");
    } catch (error) {
      console.error("Error sending message:", error);
      setError("Error sending message. Please try again.");
    }
  };

  const clearChat = () => {
    setChatHistory([]);
  };

  // Optional: Fetch initial conversation history from server (if applicable)
  useEffect(() => {
    // Implement logic to fetch initial history if needed
  }, []);

  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-lg w-full md:w-96">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-semibold text-primarycolor">
          Aleeyah Chatbot
        </h1>{" "}
        {/* Use primary color */}
        <button onClick={clearChat} className="focus:outline-none">
          <svg
            className="h-6 w-6 text-gray-500 hover:text-primarycolor transition duration-300 ease-in-out" // Use primary color on hover
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 4v5H16V4zM9 14l9-9"
            />
          </svg>
        </button>
      </div>
      <div className="chat-history h-72 overflow-y-auto mb-4">
        {chatHistory.map((item, index) => (
          <div
            key={index}
            className={`flex ${
              item.role === "user" ? "justify-end" : "justify-start"
            } mb-2`}
          >
            <div
              className={`px-3 py-2 rounded-lg max-w-xs ${
                item.role === "user"
                  ? "bg-blue-500 text-white" // Use same blue as existing code
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {item.parts}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <input
          value={inputValue}
          placeholder="Ask Aleeyah about your dietary needs..."
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-1 mr-2 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500" // Use same blue as existing code
        />
        <button
          onClick={sendMessage}
          className="bg-primarycolor text-white rounded-lg px-4 py-2 hover:bg-opacity-80 transition duration-300 ease-in-out"
        >
          Send
        </button>
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <button
        onClick={handleSurprise}
        className="mt-4 text-sm text-blue-500 flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 11a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1zm3-6a1 1 0 110 2h-.586l.293-.293a1 1 0 10-1.414-1.414L10 5.586 8.707 4.293a1 1 0 10-1.414 1.414L8.586 7H8a1 1 0 110-2h3z"
            clipRule="evenodd"
          />
        </svg>
        Suggest Recipe Question
      </button>
    </div>
  );
};

export default ChatBot;
