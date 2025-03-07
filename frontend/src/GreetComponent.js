import React, { useState } from "react";
import axios from "axios";

const GreetComponent = () => {
  // State variables to store user input (name) and response message
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  /**
   * Handles greeting request to the backend.
   * - Validates the input before sending the request.
   * - Sends GET request with `name` as a query parameter.
   * - Updates `message` state with the response.
   */
  const handleGreet = async () => {
    // Validate input
    if (!name.trim()) {
      setMessage("⚠️ Please enter a valid name.");
      return;
    }

    try {
      console.log("📡 Sending request with name:", name);

      // API call to the backend
      const response = await axios.get("http://localhost:5001/api/greet", {
        params: { name },
      });

      console.log("✅ Response received:", response.data);
      setMessage(response.data.message); // Update message with API response
    } catch (error) {
      console.error("❌ Error fetching greeting:", error);
      setMessage(
        error.response?.data?.message || "⚠️ Error fetching greeting."
      );
    }
  };

  /**
   * Handles key press events.
   * - Triggers the `handleGreet` function when Enter is pressed.
   */
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleGreet();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500">
      <div className="bg-white bg-opacity-10 backdrop-blur-xl p-10 rounded-3xl shadow-2xl w-96 text-center border border-gray-200 transition-all duration-300 hover:scale-105 hover:bg-opacity-20">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-white mb-6 drop-shadow-lg animate-fade-in">
          ✨ Welcome to Younglabs
        </h2>

        {/* Input Field */}
        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyPress={handleKeyPress} // Press Enter to submit
          className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-4 focus:ring-purple-500 outline-none shadow-md transition-all duration-300 bg-gray-100 hover:bg-white placeholder-gray-500 text-center text-lg font-semibold"
        />

        {/* Button */}
        <button
          onClick={handleGreet}
          className="mt-5 bg-purple-600 text-white px-6 py-3 rounded-lg text-lg font-bold tracking-wide transition-all duration-300 hover:bg-purple-700 hover:shadow-xl active:scale-95 focus:ring-4 focus:ring-purple-400"
        >
          🌟 Get Greeting
        </button>

        {/* Display Greeting Message */}
        {message && (
          <p className="mt-5 text-lg font-semibold text-white bg-black bg-opacity-60 p-4 rounded-lg shadow-inner transition-opacity duration-300 animate-fade-in">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default GreetComponent;
