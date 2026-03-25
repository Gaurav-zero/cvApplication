import { EditButton } from "./editButton";
import { btnStyle } from "../styles/button";
import { formStyle } from "../styles/button";

function GeneralInfo(){
    return (
      <div>
        <h1>General Information</h1>;
        <h2>
            Gaurav Shukla <br />
            240108029@hbtu.ac.in <br />
            6394928581
        </h2>

        <EditButton buttonStyle={btnStyle}/>

        <form style={formStyle}>
          <label >
            Name:-
            <input style={formStyle} type= "text" name="name" id="name"/>
          </label>

          <br />

          <label >
            Email:-
            <input style={formStyle} type= "email" name="name" id="name"/>
          </label>

          <br />

          <label >
            Phone:-
            <input style={formStyle} type= "number" name="name" id="name"/>
          </label>
        </form>
      </div>
    );
}

export {GeneralInfo};