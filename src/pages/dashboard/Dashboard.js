/**
 * @author Nadir
 * @version 1.0
 */

import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

//theme
import notification from "../../assets/icons/notification.png"
import './styles.scss'
import OverView from "./SubPages/OverView";
import Parahs from "./SubPages/Parahs";
import Surahs from "./SubPages/Surahs";
import Stats from "./SubPages/Stats";
import Settings from "./SubPages/Settings";
import Login from "../Login";
import Ahadith from "./SubPages/Ahadith";
import IslamicVideos from "./SubPages/IslamicVideos";


export default function Dashboard() {

    const [user, setUser] = useState(null)
    const [page, setPage] = useState("Dashboard")

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")))
    }, [])

    const renderContent = () => {

        if (page === "Logout") {
            return <Login /> 
        }
        else if (page === "Overview") {
            return <OverView />
        }
        else if (page === "Parahs") {
            return <Parahs />
        }
        else if (page === "Surahs") {
            return <Surahs />
        }
        else if (page === "Ahadith") {
            return <Ahadith />
        }
        else if (page === "IslamicVideos") {
            return <IslamicVideos />
        }
        else if (page === "Stats") {
            return <Stats />
        }
        else if (page === "Settings") {
            return <Settings />
        }
        

    }
    return (
        <div className="dashboard-container">
            <div className="sidebar-container">
                <Sidebar setPage={setPage} />
            </div>
            <div className="rest">
                <div className="header">
                    <p>Good Morning - {user?.fullname}</p>
                    <div className="user-area">
                        <div className="search-section">
                            <input type={"search"} placeholder="Search" className="search-field"></input>
                        </div>
                        <div className="notf-container">
                            <img src={notification} alt="icon" className="notf-icon"></img> 
                        </div>
                    </div>
                </div>

                <div>
                    {renderContent()}
                </div>
            </div>
        </div>
    )
}