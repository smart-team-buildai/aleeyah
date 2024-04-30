"use client";
import { useState, useEffect } from "react"; // Use useEffect for potential future data fetching
import axios from "axios";
import { IoSend } from "react-icons/io5";
import { marked } from "marked";
import { CiUser } from "react-icons/ci";
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
        },
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

  function renderReadableText(text) {
    // Replace double asterisks with <strong> tags for bold text
    const markdownText = text.replace(/\*{2}(.*?)\*{2}/g, "**$1**");

    // Use marked library to render Markdown to HTML
    const htmlText = marked(markdownText);

    return <span dangerouslySetInnerHTML={{ __html: htmlText }} />;
  }
  return (
    <>
      {chatHistory.length === 0 ? (
        <div className="w-10/12 p-10 h-screen flex flex-col justify-between">
          <div className="flex gap-4 flex-col ">
            <div>
              <h1 className="text-primarycolor text-7xl">Hello, Alleyah</h1>
              <h1 className="text-7xl w-1/2 font-thin text-gray-400">
                What do you plan on eating today?
              </h1>
            </div>

            <div className="flex flex-col gap-3">
              <h1 className="text-lg font-bold text-gray-400">Presets</h1>

              <div className="grid grid-cols-4 gap-8">
                <div className="p-8 rounded-lg h-[200px] cursor-pointer hover:border-[2.5px] hover:border-primarycolor bg-gray-50">
                  <h1 className="text-gray-400 text-lg">
                    I have some ingredients what can i make out of it?
                  </h1>
                </div>

                <div className="p-8 rounded-lg h-[200px] cursor-pointer hover:border-[2.5px] hover:border-primarycolor bg-gray-50">
                  <h1 className="text-gray-400 text-lg">
                    Come up with a meal plan and grocery list for the week for
                    me
                  </h1>
                </div>
                <div className="p-8 rounded-lg h-[200px] cursor-pointer hover:border-[2.5px] hover:border-primarycolor bg-gray-50">
                  <h1 className="text-gray-400 text-lg">
                    Substitute the ingredients recipe for a food
                  </h1>
                </div>
                <div className="p-8 rounded-lg h-[200px] cursor-pointer hover:border-[2.5px] hover:border-primarycolor bg-gray-50">
                  <h1 className="text-gray-400 text-lg">
                    I have been having a funny feeling since i ate, why could
                    that be?
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full p-4 justify-between rounded-full bg-gray-50 flex items-center">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="How would you like aleeyah to help you today?"
              className="flex w-full outline-none bg-transparent"
            />
            <button onClick={sendMessage} className="p-4">
              <IoSend />
            </button>{" "}
          </div>
        </div>
      ) : (
        <div className=" h-screen  w-full">
          <div className="flex  items-center justify-between  p-4">
            <h1 className="text-lg font-semibold text-primarycolor">
              Aleeyah Chatbot
            </h1>{" "}
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
          <div className="chat-history h-[80%] overflow-y-auto md:w-4/6  mx-auto p-10 ">
            {chatHistory.map((item, index) => (
              <div
                key={index}
                className={`flex ${item.role === "user" ? "justify-start" : "justify-start"} mb-2`}
              >
                {item.role === "user" ? (
                  // Render user message
                  <div className={`flex gap-4 my-4`}>
                    <div className="bg-black w-[40px] h-[40px] flex justify-center items-center rounded-full">
                      <CiUser className="text-xl text-white" />
                    </div>

                    <div>
                      <h1 className="font-bold ">You</h1>
                      <p>{item.parts}</p>
                    </div>
                  </div>
                ) : (
                  <div className={`w-full my-4`}>
                    <div className="flex gap-4">
                      <div className="bg-primarycolor w-[40px] h-[40px] flex justify-center items-center rounded-full">
                        <CiUser className="text-xl text-white" />
                      </div>

                      <div className="w-full">
                        <h1 className="font-bold ">Aleeyah</h1>
                        <p>{renderReadableText(item.parts)} </p>
                      </div>
                    </div>{" "}
                  </div>
                )}
              </div>
            ))}{" "}
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
      )}
    </>
  );
};

export default ChatBot;
