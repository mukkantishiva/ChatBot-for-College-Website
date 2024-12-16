
//logo resize
document.getElementById("resize").addEventListener("click", function(){
    const image = document.getElementById("chatbotLogo");
    image.style.display= 'none';
    // image.style.paddingLeft="15px";
    // image.style.paddingTop="10px";
});


// new section added to improvise chatbot
function toggleChat() {
    const chatbox = document.getElementById('chatbox');
    const CHATBOT = document.getElementById('CHATBOT');
    chatbox.style.display = chatbox.style.display === 'none' ? 'flex' : 'flex';//none->flex
    CHATBOT.style.display = CHATBOT.style.display === 'none' ? 'flex' : 'flex';
}




function sendMessage() {
    const userInput = document.getElementById('userInput');
    const userMessage = userInput.value;
    const messages = document.getElementById('messages');

    if (userMessage.trim() === "") return;

    // Display user message
    messages.innerHTML += `<div style="padding : 0 0 0 40px ; text-align : right ;" >User: ${userMessage}</div>`;
    userInput.value = '';

    // Generate bot response
    const botResponse = getBotResponse(userMessage);
    messages.innerHTML += `<div style="padding : 0 40px 0 0 ; text-align : left ;" >Bot: ${botResponse}</div>`;
    messages.scrollTop = messages.scrollHeight; // Scroll to the bottom
}



function getBotResponse(input) {
    const lowerInput = input.toLowerCase();

    if (lowerInput.includes("courses")) {
        return "We offer Bachelor of Science, Bachelor of Arts, Master of Science, and Master of Arts.";
    } else if (lowerInput.includes("contact")) {
        return "You can reach us at info@college.edu or call (123) 456-7890.";
    } else if (lowerInput.includes("about")) {
        return "Our college offers a variety of programs to help students achieve their academic goals.";
    } else if (lowerInput.includes("admissions")) {
        return "You can apply for admission through our website. The application deadline is June 30.";
    } else if (lowerInput.includes("tuition")) {
        return "Tuition fees vary by program. Please check our website for detailed information.";
    } else if (lowerInput.includes("scholarships")) {
        return "We offer various scholarships based on merit and need. Visit our scholarships page for more details.";
    } else if (lowerInput.includes("campus")) {
        return "Our campus is located in the heart of the city, with modern facilities and a vibrant student community.";
    } else if (lowerInput.includes("library")) {
        return "Our library is open from 8 AM to 10 PM and offers a wide range of resources for students.";
    } else if (lowerInput.includes("events")) {
        return "We host various events throughout the year, including workshops, seminars, and cultural festivals.";
    } else {
        return "I'm sorry, I didn't understand that. Can you please ask something else?";
    }
}