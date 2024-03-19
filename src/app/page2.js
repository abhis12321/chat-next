"use client"

import './globals.css';
import React from "react";
import io from "socket.io-client";

function MyComponent() {
  const [socket , setSocket] = React.useState();
  const [data , setData] = React.useState("")

  const socketInitiliazer = async() => {
    await fetch('/api/socket');
      
      let socket1 = io(undefined , {
        path:"/api/socket_io",
        addTrailingSlash: false,
      });
      
      // setSocket(socket1);
      console.log(socket1);
    }

    // const handleSend = (e) => {
    //   const box = document.querySelector('.chat-box');
    //   let message = chatModel(data , 'right');
    //   box.appendChild(message);
      
    //   socket.emit('sending_message' , data);
    //   setData("");
    //   console.log("sent..");
    // };

    React.useEffect(() => {
      console.log("useEffect");
       socketInitiliazer();
    }, []);


    socket?.on('connect' , () => {
      console.log("connected");
    });

    // socket?.on('disconnect' , () => {
    //   console.log('Connected' , socket.id);
    // });

    // socket?.on('receiving_message' , val => {      
    //   const box = document.querySelector('.chat-box');
    //   let message = chatModel(val , 'left');

    //   box.appendChild(message);
    //   console.log("connected");
    // });

    return <>
          {/* <form> */}
            {/* <input type="text" value={data} onChange={e => setData(e.target.value)}/>
            <button onClick={handleSend} >send</button> */}
          {/* </form> */}

          <div className="chat-box">
            <h1>Chat Group..</h1>
          </div>
          
      </>;
      
    // return(
    //   <h1> Jack...</h1>
    // )
};



// const chatModel = (message , dir) => {
//   const node = document.createElement('p');
//   node.innerText = message;
//   node.classList.add(dir);
//   return (
//     node
//   )
// }


export default React.memo(MyComponent);