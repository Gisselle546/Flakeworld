import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { faBell } from "@fortawesome/free-regular-svg-icons/faBell";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope";
import React from 'react'

const Minibar = () => {

    const small =[
        {
          name: "Home",
          href: "/home",
          icon: faHome,
        },
      
        {
          name: "Notifications",
          href: "/notifications",
          icon: faBell,
          count: 0,
        },
      
        {
          name: "Messages",
          href: "/messages",
          icon: faEnvelope,
        },
      
      ]
    const smallScreen= small.map(bar=>{
    return (
      
              <>
                   <div style={{cursor:"pointer"}}>
                   
                   <FontAwesomeIcon icon={bar.icon} style={{flex:1}}size="1x"/>
                   </div>
                   
              </>
           )
      
          })
          
    return(
        <div style={{display:'flex', justifyContent:"space-evenly"}}>
            
            {smallScreen}
        </div>
    )
}

export default Minibar
