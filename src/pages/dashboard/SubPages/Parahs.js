import React, {useEffect, useState} from 'react';
import { toast } from 'react-toastify';
import { apiGET } from '../../../apiService/apiService';

import "./styles.scss"

const Parahs = () => {

    const [parahs, setParahs]=useState([])
    const [lower, setLower]=useState(0)
    useEffect(() => {
        apiGET("all-parahs").then(resp=>{
            if(resp.data){
                setParahs(resp.data[0].parahs)
            }
            else{
                toast.error("Could not fetch data: Server error")
            }
        }).catch(error=>{
            toast.error(error.message)
        })
    }, [])

    const handleNextClick=()=>{
        if(lower<=23){
            setLower(prev=>prev+6)
        }
    }
    const handlePrevClick=()=>{
        if(lower>=7)
            setLower(prev=>prev-6)
    }

    return (
        <div className='page-container'>
            <div className='parahs-container'>
            {parahs.splice(lower,7).map((p)=>{
                return(
                    <div className='parah'>
                        <div className='english-name'>{p.englishName}</div>
                        <div className='arabic-name'>{p.name}</div>
                    </div>
                )
            })}
            </div>
            <div className='pagination'>
                <button className='prev-btn' onClick={handlePrevClick}>Prev</button>
                <p>{lower+1}/4</p>
                <button className='prev-btn' onClick={handleNextClick}>Next</button>
            </div>
        </div>
    )
}

export default Parahs;