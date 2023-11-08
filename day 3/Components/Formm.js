import {useState} from 'react';
import {toast,Toaster} from 'react-hot-toast';
const Formm=()=>
{
    const[form,setForm]=useState({
        name:'',
        email:'',
        phone:0,
        username:'',
        password:''
    })
    const handlechange = (e)=>{
        setForm({...form,[e.target.id]:e.target.value});
        console.log('event triggered');
    }

const handlesubmit = (e)=>{
    e.preventDefault();
    console.log(form);
    toast.success('Success!');
}
return(
   <>
    <form className='f1' onSubmit={handlesubmit}>
        <input type="text" name="name" id="name" placeholder="Name" className="fx1" onChange={handlechange}/>
        <input type="email" name="" id="email" placeholder="Email" className="fx1" onChange={handlechange}/>
        <input type="number" name="" id="Phone" placeholder="Phone" className="fx1" onChange={handlechange}/>
        <input type="text" name="" id="username" placeholder="Username" className="fx1" onChange={handlechange}/>
        <input type="password" name="" id="password" placeholder="Password" className="fx1" onChange={handlechange}/>
        <button className="fx2" type='submit' ></button>
    </form>
    <Toaster
  position="top-right"
  reverseOrder={false}
/>
 </>
)
}
export default Formm;