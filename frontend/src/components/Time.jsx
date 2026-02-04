import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Time = () => {
    const [clock,setClock]=useState(null)
    const[londonclock,setlondonclock]=useState(null);
    const[dubaiclock,setdubaiclock]=useState(null);
    const[newyorkclock,setnewyorkclock]=useState(null);
    const[delhiclock,setdelhiclock]=useState(null);

    const timezone=[
        londonclock,
        delhiclock,
        newyorkclock,
        dubaiclock
    ]

    const days=[
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]

    useEffect(()=>{
        const fetchclock=async()=>{
            try {
                const res=await axios.get('https://time.now/developer/api/timezone/Europe/Berlin');
                const londonres=await axios.get('https://time.now/developer/api/timezone/Europe/London');
                const dubaires=await axios.get('https://time.now/developer/api/timezone/Asia/Dubai');
                const newyorkres=await axios.get('https://time.now/developer/api/timezone/America/New_York');
                const delhires=await axios.get('https://time.now/developer/api/timezone/Asia/Kolkata');
                setClock(res.data)
                setlondonclock(londonres.data)
                setdubaiclock(dubaires.data)
                setnewyorkclock(newyorkres.data)
                setdelhiclock(delhires.data)
                console.log(res.data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchclock()
    },[])
  return (
    <div className='flex flex-col  justify-center gap-5 p-10 min-h-screen'>


        <div className='flex flex-row gap-4 items-center'>
            <label className='text-lg font-semibold '>Search Here</label>
            <input type="text" name="" id=""  className='w-[500px] h-9  rounded-lg border border-gray-500 focus:border-orange-600 focus:ring-0 outline-none'/>
        </div>
      <div>
        <p className=' text-6xl sm:text-[200px]  text-center text-gray-900'>{clock ? new Intl.DateTimeFormat("en-US", {timeZone: clock.timezone,timeStyle: "medium"}).format(new Date(clock.datetime)) :"Loading..."}</p>
      </div>
      <hr className='border-b border-white'/>
      <div className='flex flex-col gap-7 sm:flex-row justify-between'>
         <p className='text-5xl '>{clock ? clock.timezone : "Loading..."}</p>


         <p className='font-semibold text-gray-600 w-[200px]'>Life move fast.Stay on time and Enjoy every Movement</p>
         <p className='text-xl font-semibold'>{clock ? days[clock.day_of_week]:''}</p>
          <p className='font-semibold text-xl text-center text-gray-500'>{clock ? new Date(clock.datetime).toLocaleDateString():"Loading..."}</p>
      </div>


      <div className='flex flex-col sm:flex-row gap-5 p-4 sm:p-10 '>
        {
           timezone.map((zone)=>(
            <div className='flex flex-col w-[300px] h-[200px] gap-4  rounded-lg p-3 shadow-lg bg-white'>
                <p className='text-center font-semibold'>{zone ? zone.timezone:''}</p>
                <p className='text-4xl  text-center text-gray-900 font-semibold'>{zone ? new Intl.DateTimeFormat("en-US", {timeZone: zone.timezone,timeStyle: "medium"}).format(new Date(zone.datetime)):"Loading..."}</p>
            </div>
           ))
        }
      </div>
    </div>
  )
}

export default Time
