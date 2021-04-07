const rooms = []

const addRoom = ({ roomName }) => {
    roomName = roomName.trim().toLowerCase()

    const existingRoom = rooms.find((room) => room.roomName === roomName)

    if (!existingRoom) {
        const room = { roomName } 
        rooms.push(room)
    }
}

const getRooms = () => {
    return rooms
}

module.exports = {
    addRoom,
    getRooms
}