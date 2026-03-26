import {useState} from 'react';
import { EditButton } from "./editButton";
import { btnStyle } from "../styles/button";
import { formStyle } from "../styles/button";

function GeneralInfo(){
  const [info, setInfo]= useState({name: "Gaurav Shukla", email: "240108029@hbtu.ac.in" , phone: 6394928581});
  const [inputName, setInputName]= useState({name:"" , email:"", phone:""});

  function handleSubmit(e){
    e.preventDefault();
    setInfo({ ...info, name: inputName.name, email: inputName.email, phone: inputName.phone});
  }


    return (
      <div>
        <h1>General Information</h1>;
        <h2>
            {info.name} <br />
            {info.email}<br />
            {info.phone}
        </h2>

        <EditButton buttonStyle={btnStyle}/>

        <form style={formStyle} onSubmit={handleSubmit}>
          <label >
            Name:-
            <input 
                style={formStyle} 
                type= "text" 
                name="name"
                id="name"
                value={inputName.name}
                onChange={(e) => setInputName({...inputName, name: e.target.value})}
            />
          </label>

          <br />

          <label >
            Email:-
            <input 
                style={formStyle}
                type= "email"
                name="name"
                id="name"
                value={inputName.email}
                onChange={(e) => setInputName({...inputName, email: e.target.value})}
            />
          </label>

          <br />

          <label >
            Phone:-
            <input 
                style={formStyle} 
                type= "number"
                name="name" 
                id="name"
                value={inputName.phone}
                onChange={(e) => setInputName({...inputName, phone: e.target.value})}
            />
          </label>

          <br />

          <button>Submit</button>
        </form>
      </div>
    );
}

export {GeneralInfo};