import React from 'react'
import { StreamChat } from 'stream-chat'
import { Chat } from 'stream-chat-react'
import Cookies from 'universal-cookie'
// Importing Stylesheet
import './App.css'
// Importing Components
import { ChannelListContainer, ChannelContainer, Auth} from './components'

const cookies = new Cookies();


// Api Key for Stream.io
const apiKey = 'aheht6n5vvqr';
// Inititalizing Chat with API Key  
const client = StreamChat.getInstance(apiKey);

// Logged in AuthToken
  const authToken = cookies.get("token");

  if(authToken) {
    client.connectUser({
      id: cookies.get("userId"),
      name: cookies.get("username"),
      fullName: cookies.get("fullName"),
      image: cookies.get("avatarURL"),
      hashedPassword: cookies.get("hashedPassword"),
      phoneNumber: cookies.get("phoneNumber"),
    }, authToken);
  }

const App = () => {

  

 if(!authToken) return <Auth />

  return (

    <div className="app__wrapper">
        <Chat client={client} theme='team light'>

            <ChannelListContainer />

            <ChannelContainer />

        </Chat>
    </div>
  )
}

export default App