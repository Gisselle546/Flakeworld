import React from 'react'
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faBell } from "@fortawesome/free-regular-svg-icons/faBell";
import { faComments } from "@fortawesome/free-regular-svg-icons/faComments";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope";
import { faListAlt } from "@fortawesome/free-regular-svg-icons/faListAlt";
import { faUser } from "@fortawesome/free-regular-svg-icons/faUser";
import { faCog } from "@fortawesome/free-solid-svg-icons/faCog";
import { faHashtag } from "@fortawesome/free-solid-svg-icons/faHashtag";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import {faSnowflake} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useStore} from '../../context/Auth';
import { device } from '../../utils/device';
import styled from 'styled-components';
import Link from 'next/link'


const Sidebar = () => {
    const {user} = useStore();
    let list;
   





  const auth = [
  
    {
      name: "Home",
      href: "/",
      icon: faHome,
    },
    {
      name: "Explore",
      href: "/explore",
      icon: faHashtag,
    },
    {
      name: "Profile",
      href: `/profiles/${user?.username}`,
      icon: faUser,
    },
    {
      name: "Notifications",
      href: "/notifications",
      icon: faBell,
      count: 0,
    },
   
  
    {
      name: "Settings",
      href: "/profilemodal",
      icon:faCog,
    },
    
   
]   

const small =[
  {
    name: "Home",
    href: "/",
    icon: faHome,
  },

  {
    name: "Notifications",
    href: "/notifications",
    icon: faBell,
    count: 0,
  },

 

]

const unauth = [
    {
        name: "Explore",
        href: "/explore",
        icon: faHashtag,
      },
    
    {
        name: "Settings",
        href: "/settings",
        icon:faCog,
      },
]

user!==null? list=auth:list=unauth


    
    const side = list.map(bar=>{
          
        return (
           <>
                <div style={{cursor:"pointer"}}>
                    <Link  href={bar.href}>
                    <a><FontAwesomeIcon icon={bar.icon} style={{flex:1}}size="2x"/>  {bar.name}</a>
                    </Link>
                </div>
                
           </>
        )
    })

    const smallScreen= small.map(bar=>{
      return (
        <>
             <div style={{cursor:"pointer"}}>
             <Link  href={bar.href}>
            <a><FontAwesomeIcon icon={bar.icon} style={{flex:1}}size="1x"/></a> 
             </Link>
             </div>
             
        </>
     )

    })
    
    
      
    
    return (
      
      <>
        
        <div style={{display:'flex',flexDirection:'column', justifyContent:"space-evenly",height:"50vh",marginLeft:"10rem"}}>
        <Link href={{pathname: '/'}}><FontAwesomeIcon style={{color:"rgb(29,161,242)", cursor:"pointer"}}icon ={faSnowflake} size="2x"/></Link>
            {side}
        </div>
       
        
      
      </>

        )
    
}

export default Sidebar;
