import React from 'react';

import ic_home from "../../assets/icons/home.png"
import ic_parahs from "../../assets/icons/parahs.png"
import ic_surahs from "../../assets/icons/surahs.png"
import ic_stats from "../../assets/icons/stats.png"
import ic_settings from "../../assets/icons/settings.png"
import ic_logout from "../../assets/icons/logout.png"
import ic_ahadith from "../../assets/icons/ahadith.png"
import ic_videos from "../../assets/icons/videos.png"

const Sidebar = (props) => {

    const top_options = [
        {
            title: "Overview",
            icon: ic_home,
            page: "Overview"
        },
        {
            title: "Open Parahs",
            icon: ic_parahs,
            page: "Parahs"
        },
        {
            title: "Open Surahs",
            icon: ic_surahs,
            page:"Surahs"
        },
        {
            title: "Ahadith",
            icon: ic_ahadith,
            page:"Ahadith"
        },
        {
            title: "Islamic Videos",
            icon: ic_videos,
            page:"IslamicVideos"
        },
        {
            title: "Stats",
            icon: ic_stats,
            page:"Stats"
        },
    ]

    const bottom_options = [
        {
            title: "Settings",
            icon: ic_settings,
            page: "Settings"
        },
        {
            title: "Logout",
            icon: ic_logout,
            page: "Logout"
        },
    ]
    const handleOptionClick = (option) => {

        props.setPage(option)
    }

    const handleBottonOptionClick = (option) => {

        if(option==="Logout"){
            localStorage.removeItem("token")
            localStorage.removeItem("user")
            props.setPage("/")
            return
        }
        else{
            props.setPage("Settings")
        }
    }

    return (
        <div className='sidebar'>
            <div className='list-container'>
                <ul>
                    {
                        top_options.map((option, index) => {
                            return (
                                <li onClick={() => handleOptionClick(option?.page)} key={option.title}>
                                    <img src={option.icon} alt="icon"></img>
                                    <span>{option.title}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className='list-container'>
            <ul>
                    {
                        bottom_options.map((option, index) => {
                            return (
                                <li onClick={() => handleBottonOptionClick(option?.page)} key={option.title}>
                                    <img src={option.icon} alt="icon"></img>
                                    <span>{option.title}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;