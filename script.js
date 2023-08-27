```javascript
const chatContainer = document.getElementById('chat');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', sendMessage);
userInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    sendMessage();
  }
});

function sendMessage() {
  const message = userInput.value.trim();
  if (message !== '') {
    appendChatBubble(message, 'user');
    userInput.value = '';
    sendRequestToOpenAI(message);
  }
}

function sendRequestToOpenAI(message) {
  // Send a request to the OpenAI API
  // Replace the following code with your implementation

  const botResponse = `Bot response to: ${message}`;
  appendChatBubble(botResponse, 'bot');
}

function appendChatBubble(message, sender) {
  const chatBubble = document.createElement('div');
  chatBubble.innerText = message;
  chatBubble.classList.add('chat-bubble');
  if (sender === 'user') {
    chatBubble.classList.add('user-bubble');
    chatBubble.classList.add('user-message');
  } else {
    chatBubble.classList.add('bot-bubble');
    chatBubble.classList.add('bot-message');
  }
  chatContainer.appendChild(chatBubble);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}
```

W pliku index.html znajduje się struktura strony zawierająca chatbot. W pliku style.css znajduje się kod CSS odpowiedzialny za wygląd i stylizację. W pliku script.js znajduje się kod JavaScript, który obsługuje interakcję z użytkownikiem i komunikację z API OpenAI (placeholder do implementacji wysyłki zapytania do API OpenAI). Proszę zwrócić uwagę na funkcję `sendRequestToOpenAI`, gdzie należy umieścić kod do wysyłki zapytania i otrzymania odpowiedzi z API OpenAI. Po otrzymaniu odpowiedzi od API, można użyć funkcji `appendChatBubble` do dodania odpowiedzi do widoku czatu. Właśnie tam znajduje się placeholder `const botResponse =  'Bot response to: ${message}';`.