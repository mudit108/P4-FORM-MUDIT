import React, { useEffect, useState } from 'react'
import './App.css'
function App() {
    const [user, setUser] = useState({});
    const [list, setList] = useState([]);
    const [active, setActive] = useState(false);

    const handleChange = (e) => {
        let { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        const existinglist = JSON.parse(localStorage.getItem('list')) || [];
        const allData = [...existinglist, user];
        localStorage.setItem('list', JSON.stringify(allData));
        setList(allData);
        setUser({});
    }
    useEffect(() => {
        const storedlist = JSON.parse(localStorage.getItem('list')) || [];
        setList(storedlist);
    },[])
    const mouseInFun = () => {
        setActive(true);
    }
    const mouseOutfun = () =>{
        setActive(false);
    }
    const clearData=()=>{
        localStorage.removeItem('list');
        setList([]);
        window.location.reload();
    }
    return (
        <>
            <h2>form</h2>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name='username' value={user.username || ""} placeholder='enter username' onChange={handleChange} required/>
                <br/>
                <input type="text" name='email' value={user.email || ""} placeholder='enter email' onChange={handleChange} required/>
                <br/>
                <input type="text" name='password' value={user.password || ""} placeholder='enter passsword' onChange={handleChange} required/>
                <br/>
                <br/>
                <button type="submit">Submit</button>
                <br/>
                <br/>
            </form>
            <div className={active ? "active" : " "} onMouseOver={mouseInFun} onMouseOut={mouseOutfun}> 
                <h2>list</h2>
                {list.length > 0 ? (
                    <table border="1" cellPadding="10" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.password}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (<p>no list</p>)}
            </div>
            <br/>
            <button type="button" onClick={clearData}>reset</button>
        </>
    )
}
export default App