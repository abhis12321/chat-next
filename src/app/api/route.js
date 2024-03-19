// pages/api/socket.js
// const { Server } = require("socket.io");

// export function GET() {
//   let res = NextResponse.next()

//   if (res.socket.server.io) {
//     return res;
//   }

//   const io = new Server(res.socket.server,{ path:'/api/socket', addTrailingSlash: false});
//   res.socket.server.io = io;

//   io.on("connection", (socket) => {
//     console.log('A user connected');

//     socket.on("send-message", (obj) => {
//       io.emit("receive-message", obj);
//     });

//     socket.on('disconnect', () => {
//       console.log('A user disconnected');
//     });
    
//   });

//   return res;
// };