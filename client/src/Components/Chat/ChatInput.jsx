import React from 'react'
import {useDispatch} from 'react-redux';
import {useState} from 'react';

function ChatInput({ handleSocketSubmit }) {

  const [content, setContent] = useState("")
  const dispatch = useDispatch()

  const handleChange = (e)=>{
    
      setContent(e.target.value)
      
  }
  
  const handleSubmit = () => {

    if(content.length){
      handleSocketSubmit(content);
      dispatch({
        type: 'SEND_MESSAGE',
        payload : {
          content : content,
          chat_id : 1,
          sender_id : 1,
          timestamp : '12-3-4T12:30'
  
        }
      })
      setContent("");

    }
    
  }

  const handleEnterKey =(e) => {

 if(e.key === 'Enter'){   if(content.length){
      handleSocketSubmit(content);
      dispatch({
        type: 'SEND_MESSAGE',
        payload : {
          content : content,
          chat_id : 1,
          sender_id : 1,
          timestamp : '12-3-4T12:30'
  
        }
      })
      setContent("");

    }}
  } 

  return (
    
      <div className="absolute w-full bottom-0 items-center flex justify-between p-2 ">
             
              <div className="relative w-full m-3">
              
                <input
                  type="text"
                  className="border-2 border-slate-300 rounded-full pl-6 pr-12 py-2 focus:outline-none h-auto placeholder-gray-900 bg-white text-black"
                  style={{ fontSize: "1rem", width: "100%" }}
                  onChange = {handleChange}
                  value={content}
                  placeholder="Type a message..."
                  id="typemsg"
                  onKeyDown={handleEnterKey}
                />
            
              </div>
        
              <div className="w-10 h-10 rounded-full bg-blue-300 text-center items-center flex justify-center">
                <button onClick={handleSubmit} className="w-10 h-10 rounded-full text-center items-center flex justify-center focus:outline-none hover:bg-gray-900 hover:text-white">
                 <img width="25px" height="25px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1660901858/right-arrow_h5nysa.png" alt="send-button"/>
                </button>
              </div>
           
          </div>
    
  )
}

export default ChatInput