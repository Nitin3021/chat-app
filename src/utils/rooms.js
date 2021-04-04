const rooms = []

const addRoom = ({ roomName }) => {
    roomName = roomName.trim().toLowerCase()

    const existingRoom = rooms.filter((room) => {
        room.roomName === roomName
    })

    if (existingRoom.length === 0) {
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