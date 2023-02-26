import React from 'react';

const Sidebar = (props) => {

    const top_options = [
        {
            title: "Open Parahs",
            icon: "",
            page: "Parahs"
        },
        {
            title: "Open Surahs",
            icon: "",
            page: "Surahs"
        },
        {
            title: "Open Surahs",
            icon: "",
        },
        {
            title: "Open Surahs",
            icon: "",
        },
        {
            title: "Open Surahs",
            icon: "",
        }
    ]
    const handleOptionClick = (option) => {

        props.setPage(option)
    }
    return (
        <div className='sidebar'>
            <div className='list-container'>
                <ul>
                    {
                        top_options.map((option, index) => {
                            return (
                                <li onClick={() => handleOptionClick(option?.page)} key={option.title}>{option.title}</li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className='options-container'>
                <ul>
                    <li>Settings</li>
                    <li>Logout</li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;