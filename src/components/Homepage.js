import React, { useContext, useEffect, useState } from 'react'
import { Appointiescontext } from '../context/Appointiesdata'
import Card from './Card'
import '../css/Homepage.css'
import { Doughnut } from 'react-chartjs-2'


const Homepage = () => {
    const {appointies , se , setSe , setPe , pe , setDs , ds} = useContext(Appointiescontext) 

    // const [grapharr, setgrapharr] = useState({Software_engineers : 0 , product_manager: 0, data_scientist: 0})
    // console.log(grapharr)
    
    const data = {
        labels: ['Software engineers', 'product manager', 'data science'],
        datasets: [
          {
            label: '# of Votes',
            data: [se,pe,ds],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1,
          },
        ],
    }
    // console.log(state);
    // console.log(appointies)

    const [userdata, setuserdata] = useState([]);

    useEffect(() => {
        appointies().then((res)=>{
            console.log(res)
            setuserdata(res.data);
            setSe(res.data.filter((data)=>data.skill==="software enginner").length)
            setPe(res.data.filter((data)=>data.skill==="product manager").length)
            setDs(res.data.filter((data)=>data.skill==="data scientist").length)

        })
    }, [])

    return (
        <div className="home_page"> 
            {userdata.length>0?
            // <Card appointies = {userdata.data} />
            <><Card appointies ={userdata.filter((data)=>data.skill==="software enginner")}/>
            <Card appointies ={userdata.filter((data)=>data.skill==="product manager")}/>
            <Card appointies ={userdata.filter((data)=>data.skill==="data scientist")}/></>
            :"loading"}
            <div className="graph">
            <Doughnut data={data} />
            </div>
        </div>
    )
}

export default Homepage
