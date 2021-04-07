const socket = io()

const $chatRoomForm = document.querySelector('#chatroom-form')
const $chatRoomFormInput = $chatRoomForm.querySelector('#chatroom-room')

socket.on('getAllRooms', ({ rooms }) => {
    const chatRoom = document.querySelector('#chat-room').innerHTML

    const html = Mustache.render(chatRoom, {
        rooms: rooms
    })

    document.querySelector('#chat-room-option').innerHTML = html
})

document.getElementById('chat-room-option').addEventListener('change', function() {
    $chatRoomFormInput.value = this.value
    $chatRoomFormInput.readOnly = true
})