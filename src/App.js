import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import { Switch } from 'antd';
import { useState } from 'react';
import { MdWbSunny,MdBedtime } from "react-icons/md";
import 'animate.css';


function App() {

  const[color, setColor] = useState(false);

  let Check=(checked)=>{
    return(
      console.log(`${checked}`),
      setColor(checked)
    )
  }

  return (
    <div style={{backgroundColor: color ? '#1a1a1a':'#f2f2f2'}} className="App">
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
          <h1 className='Title' style={{color: color ? '#f2f2f2':'#1a1a1a'}}>Dark Mode</h1>
          </div>
          <br />
          <div className="col-md-6">
          {color? <MdBedtime className='animate__animated animate__fadeInDown' style={{fontSize: '5rem', color:'white'}}/> : <MdWbSunny className='animate__animated animate__fadeInDown' style={{fontSize: '5rem', color:'#ffa31a'}}/>}
          </div>
        </div>
      </div>
      <br />
      
      <br />
      <br />
      <Switch className='Swicth' onChange={Check} />
      <br />
      <br />
    </div>
  );
}

export default App;
