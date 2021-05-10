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

const removeRoom = (room) => {
    rooms.pop(room)
}

module.exports = {
    addRoom,
    getRooms,
    removeRoom
}