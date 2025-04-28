
function toggleChatbot() {
  const chatbot = document.getElementById("chatbot");
  const chatbotIcon = document.getElementById("chatbot-icon");

  if (chatbot.style.display === "flex") {
    chatbot.style.display = "none";
    chatbotIcon.style.display = "flex";
  } else {
    chatbot.style.display = "flex";
    chatbotIcon.style.display = "none";
  }
}

function displayMessage(message, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', sender);
  messageDiv.innerHTML = message;
  document.getElementById('chatbox').appendChild(messageDiv);
  document.getElementById('chatbox').scrollTop = document.getElementById('chatbox').scrollHeight;
}

function sendMessage() {
  const userInput = document.getElementById("userInput").value.trim().toLowerCase();
  if (userInput === "") return;

  displayMessage(userInput, 'user');
  const botResponse = handleUserInput(userInput);
  displayMessage(botResponse, 'bot');
  document.getElementById("userInput").value = "";
}

function handleUserInput(input) {
  if (input.includes("where's my ride")) {
    return "To check your ride status, please provide your booking reference.";
  }

  if (input.includes("how much is the ride")) {
    return "Please provide your pickup and drop-off locations for an accurate quote.";
  }

  if (input.includes("car type") || input.includes("which car")) {
    return "For X amount of people, we suggest a Sedan or SUV. How many people are in your party?";
  }

  if (input.includes("quote")) {
    return "To get a quote, I need the following details: pickup and drop-off locations, and vehicle type (Sedan, SUV, Economy, etc.).";
  }

  if (input.includes("fare") || input.includes("price")) {
    return "I can calculate the fare for you! Just let me know the distance, wait time, and vehicle type.";
  }

  return "Sorry, I didn’t quite understand that. Please try asking about a ride quote, car types, or other ride-related questions.";
}

window.onload = () => {
  const chatbotIcon = document.getElementById("chatbot-icon");
  chatbotIcon.onclick = toggleChatbot;
};
