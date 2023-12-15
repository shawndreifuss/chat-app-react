import React from 'react'

// Avatar to use images
import { Avatar, useChatContext } from 'stream-chat-react'

const TeamChannelPreview = ({ channel, type}) => {

  // Retrieving the first user from the channel state
  const { channel: activeChannel, client } = useChatContext()

  const ChannelPreview = () => (
    <p className="channell-preview__item">
      {/* ? waiting for data */}
      # {channel?.data?.name || channel?.data?.id}
    </p>
  );

const DirectPreview =() => {
  // Mapping over users in the channel state to get the users we are talking to
  const members = Object.values(channel?.state?.members).filter(({ user}) => user.id !== client.userID)

  return (
    <div className="channel-preview__item single">
      <Avatar 
      image={members[0]?.user?.image}
      name={members[0]?.user?.fullName }
      size={24}
      />
      <p>{members[0]?.user?.fullName}</p>
    </div>
  )
}
  return (
    <div className={
      channel?.id === activeChannel?.id
      ? 'channel-preview__wrapper__selected'
      : 'channel-preview__wrapper'
    }
    onClick={() => {
      console.log(channel)
    }}
    >
      {type === 'team' ? <ChannelPreview /> : <DirectPreview />}
    </div>
  )
}

export default TeamChannelPreview