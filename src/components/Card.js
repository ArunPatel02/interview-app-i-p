import React, { useContext, useRef, useState } from 'react'
import Usercard from './Usercard'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Appointiescontext } from '../context/Appointiesdata';
const Card = ({appointies}) => {

    const { setSe , setPe , setDs , addappointies} = useContext(Appointiescontext)

    const openpop = useRef(null)

    const [name, setname] = useState("")
    const [hide, sethide] = useState(true)
    const [appointiesdata, setappointiesdata] = useState(appointies)

    const addapponties = (e)=>{
        console.log(openpop.current)
        openpop.current.classList.toggle("active");
    }

    const addcard = async(e)=>{
        e.preventDefault();
        setappointiesdata([...appointiesdata , {name : name , skill : appointies[0].skill}])
        const data = await addappointies({name : name , skill : appointies[0].skill})
        if (data.success === "true") {
            alert("created successfully");
        }
        else{
            alert(data.error)
        }
        setname("")
        openpop.current.classList.toggle("active");
        if (appointies[0].skill==="software enginner") {
            setSe(pre => pre + 1)
        }
        else if (appointies[0].skill==="product manager") {
            setPe(pre => pre + 1)
        }
        else if (appointies[0].skill==="data scientist") {
            setDs(pre => pre + 1)
        }
    }

    const hideunhide = (e)=>{
        document.querySelector(".hide").classList.toggle("active")
        document.querySelector(".hideoff").classList.toggle("active");
        sethide(!hide);
    }

    return (
        <>
        <div className="card">
            <div className="heading_content">
                {appointies[0].skill}
                <div className="icons">
                <AddCircleOutlineIcon onClick={addapponties}/> 
                <VisibilityIcon onClick={hideunhide} className="hide" />
                <VisibilityOffIcon onClick={hideunhide} className="hideoff active" />
                </div>
            </div>
            <form className="addcard" onSubmit={addcard} ref={openpop}>
            <input type="text" name="name" id="name" placeholder="enter your name" value={name} onChange={(e)=>setname(e.target.value)} />
            <div className="skill">{appointies[0].skill}</div>
            <button>submit</button>
        </form>
            <div className="user_card">
                {(hide)?appointiesdata.map((data , index)=>{
                    return <Usercard  key={index} id={data._id} status={data.status} name={data.name} skill={data.skill} />
                }):"you hide the content"}
            </div>
        </div>
        </>
    )
}

export default Card
