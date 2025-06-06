const faqs = { 'how to send a pic on whatsapp': "📸 Steps:\n1. Open WhatsApp\n 2. Select the chat\n3. Tap the ⚛️ (attachment) icon\n4. Choose 'Gallery'\n5. Select the photo\n6. Tap 'Send' –→", 'how to create a whatsapp group': "👥 Steps:\n1. Open WhatsApp\n2. Tap the three dots (menu) ⁝\n3. Tap 'New Group'\n4. Select contacts\n5. Tap green arrow\n6. Set group name and tap checkmark", 'how to share location on whatsapp': "📍 Steps:\n1. Open the chat\n2. Tap the 📌 icon\n3. Choose 'Location'\n4. Allow location access if needed\n5. Choose 'Send your current location'", 'what is a google pay': '💰 Google Pay is a UPI-based payment app that allows you to send/receive money, pay bills, and make online purchases securely.', 'how to make payment using google pay': "💵 Steps:\n1. Open Google Pay\n2. Tap 'Pay Phone number' or 'Scan QR code'\n3. Enter amount\n4. Tap 'Pay'\n5. Enter UPI PIN to confirm", 'how to check transaction history in google pay': "📊 Steps:\n1. Open Google Pay\n2. Tap your profile picture\n3. Tap 'Transaction history'\n4. Scroll to see past payments", 'how to add bank account in google pay': "🏦 Steps:\n1. Open Google Pay\n2. Tap profile > 'Add bank account'\n3. Choose your bank\n4. App will verify your number\n5. Set UPI PIN", 'what is paytm?': '🧾 Paytm is a digital wallet & UPI app for mobile recharges, bill payments, shopping, and sending money.', 'how to recharge mobile using paytm': "📱 Steps:\n1. Open Paytm\n2. Tap 'Mobile Recharge'\n3. Enter number & amount\n4. Select payment method\n5. Tap 'Pay Now'", 'how to book movie tickets on paytm': "🎬 Steps:\n1. Open Paytm\n2. Tap 'Movies'\n3. Select location, movie, and time\n4. Choose seats\n5. Make payment", 'how to pay electricity bill using paytm': "💡 Steps:\n1. Open Paytm\n2. Tap 'Electricity Bill'\n3. Choose provider\n4. Enter account number\n5. Tap 'Proceed' and make payment", 'how to send money using paytm': "💸 Steps:\n1. Open Paytm\n2. Tap 'Pay' or 'Send Money'\n3. Enter phone number or scan QR\n4. Enter amount\n5. Tap 'Send'", 'how to use google maps': '🗺️ Google Maps helps you navigate, find places, and get directions by car, walk, or public transport.', 'how to get directions in google maps': "🧭 Steps:\n1. Open Google Maps\n2. Enter destination in search bar\n3. Tap 'Directions'\n4. Choose mode (car, walk, etc.)\n5. Tap 'Start'", 'how to share location in google maps': "📍 Steps:\n1. Open Google Maps\n2. Tap your profile > 'Location Sharing'\n3. Tap 'Share Location'\n4. Choose duration & person\n5. Tap 'Share'", 'how to save place in google maps': "⭐ Steps:\n1. Search a place\n2. Tap on it\n3. Tap 'Save'\n4. Choose a list (Favorites, Want to go, etc.)" };

document.addEventListener("DOMContentLoaded", function () {
    const chatbotContainer = document.getElementById("chatbot-container");
    const closeButton = document.getElementById("close-btn");
    const sendBtn = document.getElementById("send-btn");
    const chatbotIcon = document.getElementById("chatbot-icon");

    // Toggle chatbot visibility when clicking the icon
    // Show chatbot when clicking the icon
    chatbotIcon.addEventListener("click", function () {
        chatbotContainer.classList.remove("hidden");
        chatbotIcon.style.display = "none"; // Hide chat icon
    });

    // Also toggle when clicking the close button
    closeButton.addEventListener("click", function () {
        chatbotContainer.classList.add("hidden");
        chatbotIcon.style.display = "flex"; // Show chat icon again
    });

    sendBtn.addEventListener("click", sendMessage);
    chatbotInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            sendMessage();
        }
    });

    function sendMessage() {
        const input = document.getElementById("userInput");
        const chatWindow = document.getElementById("chatWindow");
        const userText = input.value.trim();
        if (!userText) return;

        appendMessage("user", userText);
        input.value = "";

        const lowerCase = userText.toLowerCase();
        const reply = faqs[lowerCase] || "🤖 Sorry, I didn’t get that. Try asking about WhatsApp, Paytm, Google Pay, or Google Maps.";
        setTimeout(() => appendMessage("bot", reply), 500);
    }

    function appendMessage(sender, message) {
        const chat = document.getElementById("chatWindow");
        const bubble = document.createElement("div");
        bubble.className = sender === "user" ? "user-bubble" : "bot-bubble";
        bubble.textContent = message;
        chat.appendChild(bubble);
        chat.scrollTop = chat.scrollHeight;
    }
}
);