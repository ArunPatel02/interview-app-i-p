import React, { useContext, useState } from 'react'
import { Appointiescontext } from '../context/Appointiesdata'

const Usercard = (props) => {

    const {updateappointies} = useContext(Appointiescontext)

    const [date, setdate] = useState("")

    const sedule = async(id)=>{
        if (!date) {
            return alert("please set date")
        }
        const data = {id : id , status : date}
       const aa =  await updateappointies(data);
       console.log(aa);
    }

    return (
        <div className="user_details">
                    <div className="image">
                    <img src="https://savvycomsoftware.com/wp-content/uploads/2019/07/software-developers-engineer-1.jpg" alt="" />
                    </div>
                    <div className="name">
                    {props.name}
                    </div>
                    <div className="skill">
                    {props.skill}
                    </div>
                    <input type="datetime-local" name="interview_date" id="interview_date" onChange={(e)=>setdate(new Date(e.target.value).toLocaleString())}/>
                    <button>{props.status!=="pending"? <span>your interview is at {props.status}</span>:<><span onClick={()=>sedule(props.id)}>schedule Interview</span></> }
                    </button>
                </div>
    )
}

export default Usercard
