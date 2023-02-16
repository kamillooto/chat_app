var client = null;

function connect() {
    client = Stomp.client("wss://chat-app-kamillooto.herokuapp.com/chat")

    client.connect({}, function (frame) {
    client.subscribe("/topic/chat", function (message) {
        showMessage(JSON.parse(message.body).message, JSON.parse(message.body).user)
        });
    })
}

function showMessage(message, user) {
    var newResponse = document.createElement('p')

    newResponse.appendChild(document.createTextNode(user))
    newResponse.appendChild(document.createTextNode(": "))
    newResponse.appendChild(document.createTextNode(message))

    var response = document.getElementById('response')
    response.appendChild(newResponse)
}

function sendMessage() {

var messageToSend = document.getElementById('messageToSend').value;
var user = document.getElementById('user').value;

client.send("/app/chat", {}, JSON.stringify({'message': messageToSend, 'user': user}));
document.setElementById('messageToSend').value = "";

}