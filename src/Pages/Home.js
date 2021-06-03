import { Button } from 'reactstrap';

import Header from '../Partials/Header';

import React, { useState } from 'react';


import {  Link } from "react-router-dom";
function Home(){
    const[name, setName]= useState('Home');
    const[count, setCount]= useState(0);
    const handleButtonClick = () => {
    setName('FullHome');
    setCount(count + 1);   
    console.log(count);
        
    }
    const[age, setAge]= useState(0);
    const[weight, setWeight]= useState(0);
    const[height, setheight]= useState(0);
    const[gender, setgender]= useState('male');
    const[bmr, setBmr]= useState(0);
    
    const handleAgeChange = (e) => { 
        setAge(e.target.value);
    }
     const handleWeightChange = (e) => { 
         setWeight(e.target.value);
    }
      const handleHeightChange = (e) => { 
         setheight(e.target.value);
    }
         const handleGenderChange = (e) => { 
         setgender(e.target.value);
    }
       const handleTdeeCalculation = () => { 
            let bmr = (gender == 'male') ? 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age) :  447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
           setBmr(bmr.toFixed(2));
    }
return(
 <>  
  <Header /> 
<div className="container">
    <h3>{name}</h3>
     <Button color="primary" onClick = { handleButtonClick }> Set name {count} </Button>
  <div className="row">
 <h2>Enter your detail</h2>
  <form>
    <div className="form-group">
      <label htmlF or="age">Age</label>
      <input type="number" onChange ={(e)=>{ handleAgeChange(e) }} className="form-control" id="age" placeholder="Enter age" name="age" value={age} />
    </div>
    <div className="form-group">
      <label htmlFor="weight">Weight</label>
      <input type="number" onChange ={(e)=>{ handleWeightChange(e) }} className="form-control" id="weight" placeholder="Enter weight" name="weight" value={weight} />
    </div>
    <div className="form-group">
      <label htmlFor="heiht">Height</label>
      <input type="number"  onChange ={(e)=>{ handleHeightChange(e) }} className="form-control" id="height" placeholder="Enter height" name="height" value={height} />
    </div>
    <div className="form-group">
      <label htmlFor="gender">Gender</label>

          <select onChange ={(e)=>{ handleGenderChange(e) }} className="form-control" id="gender" value = {gender}>
            <option value="male">Male</option>
            <option value="famale">Female</option>
          </select>
    </div>
    <button type="button" onClick ={()=>{ handleTdeeCalculation () }}   className="btn btn-primary">Submit</button>
  </form>
  </div>
<div className = "row">
    <p>BMR ={bmr}</p>
    </div>
</div>
    </>
)
}

export default Home;