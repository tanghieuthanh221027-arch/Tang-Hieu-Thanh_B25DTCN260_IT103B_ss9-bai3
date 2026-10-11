let rooms = [
    {
        roomId: "P101",
        roomType: "Deluxe",
        pricePerNight: 1500000,
        status: "VACANT"
    },
    {
        roomId: "P102",
        roomType: "Standard",
        pricePerNight: 1000000,
        status: "VACANT"
    },
    {
        roomId: "P103",
        roomType: "Suite",
        pricePerNight: 2500000,
        status: "VACANT"
    }
];

console.table(rooms);

let newRoom = {
    roomId : "P104",
    roomType : "VIP Suite",
    pricePerNight : 3500000,
    status : "VACANT"
};

rooms.push(newRoom);
console.table(rooms);

for (let i = 0; i < rooms.length; i++) {
    if (rooms[i].roomId === "P101") {
        rooms[i].status = "OCCUPIED";
        break;
    }
}

console.table(rooms);

for (let i = 0; i < rooms.length; i++) {
    if (rooms[i].roomId === "P103") {
        rooms.splice(i, 1);
        break;
    }
}

console.table(rooms);