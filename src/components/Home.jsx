import {useBroadCastChannel} from '../broadCast';

const Home =()=>{
    const {message, updateMessage} = useBroadCastChannel();
    return (
        <>
        Home
        <p>{message}</p>
        </>
    )
}

export default Home;