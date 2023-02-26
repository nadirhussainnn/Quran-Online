/**
 * @author Nadir
 * @version 1.0
 */

import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

//theme
import './styles.scss'


export default function Dashboard() {

    const [user, setUser] = useState(null)
    const [page, setPage] = useState("Dashboard")

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")))
    }, [localStorage.getItem("user")])

    const renderContent = () => {

        if (page === "Dashboard") {
            return (
                <h1>Dashboard</h1>
            )
        }
        else if (page === "Parahs") {
            return <Parahs />
        }
        else if (page === "Surahs") {
            return <Surahs />
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
                    </div>
                </div>

                <div>
                    {renderContent()}
                </div>
            </div>
        </div>
    )
}


const Parahs = () => {
    return (
        <h1>Parahs</h1>
    )
}

const Surahs = () => {
    return (
        <h1>Surahs</h1>
    )
}