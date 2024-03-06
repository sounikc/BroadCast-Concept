import { createContext, useContext, useEffect ,useState} from "react";


const BroadCastContext = createContext();

export const BroadCastProvider = ({ children }) => {
    const [message, setMessage] = useState('Default Message');

    const channel = new BroadcastChannel('messagechannel');
    useEffect(()=>{
        channel.onmessage=({data})=>{
            setMessage(data);
        }
    },[channel])
    return (
        <BroadCastContext.Provider value={{message, channel}}>
            {children}
        </BroadCastContext.Provider>
    )
}

export const useBroadCastChannel =()=>{
    const {message, channel} = useContext(BroadCastContext);

    const updateMessage=(message)=>{
        channel.postMessage(message)
    }

    return {message, updateMessage}
}