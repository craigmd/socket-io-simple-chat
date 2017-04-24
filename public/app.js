var socket = io()
var form = document.getElementById('message-form')
var message = document.getElementById('m')
var messageList = document.getElementById('messages')

form.onsubmit = function() {
  socket.emit('chat message', message.value)
  message.value = ''

  return false
}

socket.on('chat message', function(msg) {
  messageList.innerHTML += `<li>${msg}</li>`
})
