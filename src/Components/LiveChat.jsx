import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../Utils/chatSlice';
import { generateRandomComments, generateRandomName } from '../Utils/helper';
import ChatMessage from './ChatMessage';

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState("")
    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages);
    useEffect(() => {
        const interval = setInterval(() => {
            // API POLLING
            console.log("API Polling");
            dispatch(addMessage({
                name: generateRandomName(),
                message: generateRandomComments(20),
            }));
        }, 1000);

        return () => clearInterval(interval);

    }, [dispatch]);

    return (
        <>
            <div className='h-[500px] border border-black rounded-lg bg-slate-100 overflow-y-auto p-2 flex flex-col-reverse'>
                {chatMessages?.map((items, index) => (
                    <ChatMessage key={index} name={items.name} message={items.message} />
                ))}
            </div>
            <form className='border border-black w-full'
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(addMessage({
                        name: "Himanshu Soni",
                        message: liveMessage,
                    }))
                    setLiveMessage("")
                }}
            >
                <input
                    type='text'
                    className='w-96 ml-1'
                    placeholder='Enter your message'
                    value={liveMessage}
                    onChange={(e) => setLiveMessage(e.target.value)} // Corrected
                />
                <button className='bg-red-400 px-4 py-2 rounded-lg'>send</button>
            </form>
        </>
    );
};

export default LiveChat;
