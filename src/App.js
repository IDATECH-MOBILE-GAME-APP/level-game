import './App.css';
import axios from 'axios'
import { useState } from 'react'

function App() {

  const [name,setName] = useState([]) 
  const [age,setAge] = useState([]) 
  const [phonenumber,setPhonenumber] = useState([]) 
  const [email,setEmail] = useState([]) 


  
  const [data,setData] = useState([])
  const getone = () => {
      axios.get('http://127.0.0.1:8000/data/')
       .then( res => {
        console.log(res.data)
        setData(res.data)
       })
       .catch(err => {
        console.log(err)
       } )
  }
 const handle = (event) =>{
   event.preventDefault();
    const data =  {
    "name": name,
    "age": age,
    "phonenumber": phonenumber,
    "email": email
}
  axios.post('http://127.0.0.1:8000/data/',data)
  .then( res =>{
    console.log(res.data)
  }).catch(err => {
    console.log(err)
  })
 }
  return (
     <>
     <button onClick = {getone} >get data</button>
     <form action="" onSubmit={handle}>
      <div>
        <label>name:</label>
      </div>
      <div>
        <input type="text" value = {name} onChange= {event => setName(event.target.value)} />
        </div>
        <div>
        <label>Email:</label>
      </div>
      <div>
        <input type="text" value = {email} onChange= {event => setEmail(event.target.value)} />
        </div>
        <div>
        <label>age:</label>
      </div>
      <div>
        <input type="age" value = {age} onChange= {event => setAge(event.target.value)} />
        </div>
        <div>
        <label>phonenumber:</label>
      </div>
      <div>
        <input type="text" value = {phonenumber} onChange= {event => setPhonenumber(event.target.value)} />
        </div>
        <button type="submit">send</button>
     </form>
     <table className='app'>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Phonenumber</th>
        <th>Email</th>
        <th>Action</th>
      </tr>
     {data.map((item,key) =>{
      return (
        <>
        <tr>
          <td>{item.name}</td>
          <td>{item.age}</td>
          <td>{item.phonenumber}</td>
          <td>{item.email}</td>
          <td><button>Edite</button><button>Delete</button></td>
        </tr>
        </>
      )

     })}
     </table>
  </>
 
  );
}

export default App;
