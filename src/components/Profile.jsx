import { useBroadCastChannel } from "../broadCast";

const Profile =()=>{
    const {message, updateMessage} = useBroadCastChannel();
    return (
        <>
        {message}
        Profile
        <button onClick={()=>updateMessage('Profile has Updated your message')}>Change Message</button>
        </>
    )
}

export default Profile;