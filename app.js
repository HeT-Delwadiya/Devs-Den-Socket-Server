require('dotenv').config();

const io = require("socket.io")(process.env.PORT || 8900, {
       cors: {
              origin: "https://devs-den.herokuapp.com" && console.log("PORT: "+process.env.PORT),
       },
});

let users = [];

const addUser = (userId, socketId) => {
       !users.some((user) => user.userId === userId) &&
              users.push({ userId, socketId });
};

const removeUser = (userId) => {
       users = users.filter((user) => user.userId !== userId);
};

const getUser = (userId) => {
       return users.find((user) => user.userId == userId);
};

const getGroupUsers = (userIds) => {
       let lUsers=[];
       users.map((user) => {
              if(userIds.includes(user.userId)) {
                     lUsers.push(user);
              }
       });
       return lUsers;
};

io.on("connection", (socket) => {
       //when connect
       console.log("a user connected.");

       //take userId and socketId from user
       socket.on("addUser", (userId) => {
              addUser(userId, socket.id);
              //io.emit("getUsers", users);
       });

       //send and get message
       socket.on("sendMessage", ({ senderId, receiverId, text }) => {
              const user = getUser(receiverId);
              user && io.to(user.socketId).emit("getMessage", {
                     senderId,
                     text
              });
       });

       socket.on("sendGrpMessage", ({ senderId, receiverIds, text }) => {
              const users = getGroupUsers(receiverIds);
              users.length && users.map(user => o.to(user.socketId).emit("getGrpMessage", {
                     senderId,
                     text
              }))
       });

       //when disconnect
       socket.on("disconnectUser", (userId) => {
              removeUser(userId);
              //io.emit("getUsers", users);
       });
});
