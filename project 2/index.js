const responses = {
    hello: ["Hi there! How can I help you today?", "Hello! What can I do for you?", "Hey! Need any assistance?"],
    "how are you": ["I'm just a program, so I don't have feelings, but thanks for asking!", "I'm an AI, so I don't experience emotions, but I'm here to help!", "I'm functioning as expected, thank you!"],
    "what's your name": ["I am your friendly AI chatbot.", "You can call me your virtual assistant.", "I'm an AI created to assist you."],
    "what is the capital of france": ["The capital of France is Paris.", "Paris is the capital of France.", "France's capital city is Paris."],
    "who wrote 'romeo and juliet'": ["Romeo and Juliet was written by William Shakespeare.", "William Shakespeare authored Romeo and Juliet.", "The playwright of Romeo and Juliet is William Shakespeare."],
    "tell me a fun fact": ["Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible!", "Fun fact: A group of flamingos is called a 'flamboyance.'", "Here's a fun fact: An octopus has three hearts."],
    "who is albert einstein": ["Albert Einstein was a theoretical physicist who developed the theory of relativity, one of the two pillars of modern physics.", "Albert Einstein, the famous physicist, is known for his theory of relativity.", "Einstein, a renowned physicist, formulated the theory of relativity."],
    "what is the speed of light": ["The speed of light in a vacuum is approximately 299,792 kilometers per second (186,282 miles per second).", "Light travels at a speed of about 299,792 kilometers per second in a vacuum.", "The speed of light is nearly 300,000 kilometers per second."],
    "who invented the telephone": ["The telephone was invented by Alexander Graham Bell in 1876.", "Alexander Graham Bell is credited with inventing the telephone in 1876.", "In 1876, Alexander Graham Bell invented the telephone."],
    "who is the first president of the usa": ["The first President of the United States was George Washington.", "George Washington served as the first President of the USA.", "The inaugural President of the United States was George Washington."],
    "what is the most spoken language": ["The most spoken language in the world by number of native speakers is Mandarin Chinese.", "Mandarin Chinese is the most widely spoken language globally by native speakers.", "The language with the highest number of native speakers is Mandarin Chinese."],
    "who discovered penicillin": ["Penicillin was discovered by Alexander Fleming in 1928.", "In 1928, Alexander Fleming discovered penicillin.", "The discovery of penicillin is credited to Alexander Fleming in 1928."],
    "what is the largest desert": ["The largest desert in the world is the Antarctic Desert, which covers the continent of Antarctica.", "The Antarctic Desert is the world's largest desert by land area.", "With its expansive ice sheets, the Antarctic Desert is the largest desert on Earth."],
    "who wrote 'to kill a mockingbird'": ["To Kill a Mockingbird was written by Harper Lee.", "The author of To Kill a Mockingbird is Harper Lee.", "Harper Lee penned the novel To Kill a Mockingbird."],
    "what is the population of the world": ["As of 2021, the estimated population of the world is over 7.8 billion people.", "The global population is estimated to be over 7.8 billion as of 2021.", "In 2021, the world's population is approximately 7.8 billion people."],
    "who is the richest person in the world": ["As of 2021, the richest person in the world is Elon Musk, the CEO of Tesla and SpaceX.", "Elon Musk is considered the richest person in the world as of 2021.", "In 2021, Elon Musk, the CEO of Tesla and SpaceX, holds the title of the world's richest person."],
    "who discovered america": ["Christopher Columbus is often credited with discovering America in 1492, although indigenous peoples had been living there for thousands of years.", "In 1492, Christopher Columbus made his voyage that led to the discovery of the Americas, despite the presence of indigenous peoples.", "Christopher Columbus's 1492 voyage is commonly recognized for discovering the Americas, even though indigenous civilizations existed there long before."],
    "how old is the earth": ["The Earth is approximately 4.54 billion years old.", "Scientists estimate the age of the Earth to be around 4.54 billion years.", "The Earth is believed to be about 4.54 billion years old."],
    "who invented the light bulb": ["The invention of the practical incandescent light bulb is credited to Thomas Edison, who patented his design in 1879.", "Thomas Edison is often recognized for inventing the practical incandescent light bulb in 1879.", "In 1879, Thomas Edison patented his design for the practical incandescent light bulb."],
    "what is the largest ocean": ["The largest ocean in the world is the Pacific Ocean.", "Covering more than 63 million square miles, the Pacific Ocean is the largest ocean on Earth.", "The Pacific Ocean is the world's largest ocean by surface area."],
    "who was the first man on the moon": ["The first man on the moon was Neil Armstrong."],
    "thanks": ["I'm always happy to help"],
    "ok": ["tell me!!! you're satisfied>>>right???"],
    "what": ["I think there is a misunderstanding"],
    "you're wrong": ["My apologies! I am always learning!"],
    "so much satisfied": ["That is gorgeous to hear!"],
    "not satisfied": ["I understand that. I'm still under development."],
    "I'm okay": ["That's okay too! Remember, I'm always learning."],
    "I'm not sure": ["I'm sorry to hear that. It's important to be open to learning new things."],
    "I'm glad to hear that": ["It means a lot to me."],
    "wtf": ["I think my previous response was not so good! My apologies!"],
    "can I learn about coding?": ["Sorry, I cannot help with that! Please go to this website: https://copilot.microsoft.com/chats/19nRDL1WgvqaefsZfiF9K"],
    default: "I'm not sure how to respond to that."
};

function getResponse(message) {
    const normalizedMessage = message.toLowerCase().trim();
    const possibleResponses = responses[normalizedMessage] || responses.default;
    if (Array.isArray(possibleResponses)) {
        const randomIndex = Math.floor(Math.random() * possibleResponses.length);
        return possibleResponses[randomIndex];
    }
    return possibleResponses;
}

(function startChat() {
    const chatLog = [];

    function updateChatLog(userMessage, botResponse) {
        chatLog.push(`You: ${userMessage}`);
        chatLog.push(`Bot: ${botResponse}`);
        console.clear();
        chatLog.forEach(entry => console.log(entry));
    }
    let count = 0;

    function chat() {
        let userMessage = prompt("You: ");
        while (userMessage !== null && userMessage.toLowerCase() !== "exit") {
            const botResponse = getResponse(userMessage);
            updateChatLog(userMessage, botResponse);
            alert(`Bot: ${botResponse}`);
            userMessage = prompt("You: ");
            if (responses[userMessage.toLowerCase()] === undefined) {
                responses[userMessage.toLowerCase()] = prompt("Enter the meaning: ");
                count += 1;
            }
        }
        console.log("Chat ended. Have a great day!");
        console.log(`You helped me out with ${count} responses`);
    }

    chat();
})();
