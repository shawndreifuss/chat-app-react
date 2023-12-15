import React from 'react'
import { ChannelList
    //  useChatContext 
    } from 'stream-chat-react'
 import Cookies from 'universal-cookie'

//Importing Components
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './index'
// Import Icons
import HospitalIcon from '../assets/hospital.png'
import LogoutIcon from '../assets/logout.png'


const SideBar = () => (
   <div className="channel-list__sidebar">
    <div className="channel-list__sidebar__icon1">
        <div className="icon1__inner">
            <img src={HospitalIcon} width='30' alt="" />
        </div>
    </div>
    <div className="channel-list__sidebar__icon2">
        <div className="icon1__inner">
            <img src={LogoutIcon} width='30' alt="" />
        </div>
    </div>
   </div>

    )


    const CompanyHeader = () => (   
    <div className="channel-list__header">
        <p className="channel-list__header__text">Hello World</p>
    </div>
        )

const ChannelListContainer = () => {
  return (
    <>
    <SideBar />
    <div className="channel-list__list__wrapper">
        <CompanyHeader />
        <ChannelSearch />
        <ChannelList 
        //Props for ChannelList
              filters={{}}
              channelRenderFilterFn={() => {}}
              List={(listProps) => (
                    <TeamChannelList 
                    // Spreading listProps
                    {...listProps}
                   type = 'team'
                    />
                )}
              Preview={(previewProps) => (
                    <TeamChannelPreview 
                    // Spreading previewProps
                    {...previewProps}
                    type = 'team'
                    />
              )}
        />
         <ChannelList 
        //Props for ChannelList
              filters={{}}
              channelRenderFilterFn={() => {}}
              List={(listProps) => (
                    <TeamChannelList 
                    // Spreading listProps
                    {...listProps}
                   type = 'messaging'
                    />
                )}
              Preview={(previewProps) => (
                    <TeamChannelPreview 
                    // Spreading previewProps
                    {...previewProps}
                    type = 'messaging'
                    />
              )}
        />
    </div>
    </>
  )
}

export default ChannelListContainer