import React, { useState, useEffect } from 'react'
// import HomeHelper from '../Components/HomeHelper'
import { useSelector, useDispatch } from 'react-redux'
import { sendMessage, getPrivateConversation, getPrivateConversation2} from '../redux/action/studentAction'
import io from 'socket.io-client';
import { useHistory } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import '../Style/Chat.css'
import { toast } from 'react-toastify';

//Swap HelperFunction
function swap(input, value_1, value_2) {
    var temp = input[value_1];
    input[value_1] = input[value_2];
    input[value_2] = temp;
}


let socket;


const Chat = (props) => {
    const store = useSelector((store) => store)
    const history = useHistory()
    const dispatch = useDispatch()
    const [room1, setRoom1] = useState("")
    const [room2, setRoom2] = useState("")
    const [receiverRegistrationNumber, setReceiverRegistrationNumber] = useState("")
    const [message, setMessage] = useState("")
    const [messageArray, setMessageArray] = useState([])
    const [olderMessages, setOlderMessages] = useState([])
    const ENDPOINT = 'https://apna-erp.herokuapp.com'

    useEffect(() => {
        let temp = props.match.params.room
        socket = io(ENDPOINT)
        let tempArr = temp.split(".")
        setReceiverRegistrationNumber(tempArr[0])
        setRoom1(temp)
        swap(tempArr, 0, 1)
        let tempRoom2 = tempArr[0] + '.' + tempArr[1]
        setRoom2(tempRoom2)
    }, [ENDPOINT, props.match.params.room])
    

    useEffect(() => {
        dispatch(getPrivateConversation(room1))
        dispatch(getPrivateConversation2(room2))
        socket = io(ENDPOINT)
        socket.emit('join room', {
            room1,
            room2
        })
        socket.on("new Message", (data) => {
            setMessageArray([...messageArray, data])
        })
        return () => {
            socket.emit('disconnect')
            socket.off()
        }
    }, [room1, room2])


    
    const formHandler = (e) => {
        e.preventDefault()
        if (message.trim().length > 0) {
            socket.emit("private message", {
                sender: store.student.student.student.name,
                message,
                room: room1
            })
            setMessage("")
            let messageObj = {
                roomId: room1,
                senderName: store.student.student.student.name,
                senderId: store.student.student.student._id,
                message,
                senderRegistrationNumber: store.student.student.student.registrationNumber,
                receiverRegistrationNumber
            }
            dispatch(sendMessage(room1,messageObj))
            setTimeout(() => {window.location.reload(); }, 3000); 
        }
        else {
            toast.error("Can't send empty message")
        }
    }


    useEffect(() => {
        socket.on("new Message", (data) => {
            setOlderMessages(store.student.privateChat)
            setMessageArray([...messageArray, data])
        })
        
    },[messageArray,olderMessages])
   
   
function formatDate(timestamp) {
    const date = new Date(timestamp);
    const formattedDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
    return formattedDate;

  }
  
  function formatTime(timestamp) {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();
    const formattedTime = hours >= 12 ? `${hours-12}:${minutes.substr(-2)}:${seconds.substr(-2)} PM` : `${hours}:${minutes.substr(-2)}:${seconds.substr(-2)} AM`;
    return formattedTime;
  }

    return (
        <div className='chatWrapper'>
            {store.student.isAuthenticated ? <>
                <Navbar bgcolor={'linear-gradient(to bottom right, #001339, #0F3277)'} profile="student" display={"none"} />
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <form className="d-flex flex-row" onSubmit={formHandler} style={{marginTop:"2rem"}}>
                                <div className="form-group ">
                                    {/* <input value={message} maxLength="10" onChange={(e) => setMessage(e.target.value)} placeholder="Type here.." type="text" className="form-control" /> */}
                                    <textarea value={message} rows="1" cols="50" onChange={(e) => setMessage(e.target.value)} placeholder="Type here.." type="text" className="form-control" />
                                </div>
                                <button type="submit" className="btn btn-primary ml-1" style={{height: "fit-content"}}>Send</button>
                            </form>
                        </div>
                        <div className="col-md-7">
                            {
                                store.student.privateChat.map((obj,index) =>
                                    <div key={index}>
                                        <p className='chat-date'>{formatDate(obj.createdAt)}</p>
                                        <div className="chat-content">
                                        <p className='personName'>{obj.senderName}</p>
                                        <div className="chat-detail">
                                        <p className='personChat'>{obj.message}<br /></p> 
                                        <span className='chat-time' >{formatTime(obj.createdAt)}</span>
                                        </div>
                                        </div>
                                        {/* //{obj.createdAt} */}
                                    </div>
                                )
                            }
                            {messageArray.map((obj, index) =>
                                <p key={index}>{obj.sender}: {obj.message}</p>
                            )}

                        </div>

                    </div>

                </div>
            </> : (history.push('/'))}
            
        </div>
    )
}

export default Chat
