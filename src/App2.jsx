import React, { useEffect, useState } from 'react'

function App2() {
    const [user,setUser] = useState({});
    const [list,setList] = useState([]);
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(user);
        const existingList = JSON.parse(localStorage.getItem('list')) || [];
        const allData = [...existingList,user];
        localStorage.setItem('list',JSON.stringify(allData));
        setList(allData);
        setUser({});
    }
    useEffect(()=>{
        const storedlist = JSON.parse(localStorage.getItem('list')) || [];
        setList(storedlist);
    },[]);
    const handleChange = (e) =>{
        let {name,value} = e.target;
        setUser({...user,[name]:value});
    }
  return (
    <>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name='username' value={user.username || ""} placeholder='enter username' onChange={handleChange} />
            <input type="text" name='email' value={user.email || ""} placeholder='enter email' onChange={handleChange} />
            <input type="text" name='password' value={user.password || ""} placeholder='enter password' onChange={handleChange} />
            <button>submit</button>
        </form>
    </>
  )
}

export default App2