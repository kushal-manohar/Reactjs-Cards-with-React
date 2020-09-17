import React from 'react';
import profile from './profile.jpg';
import './app.css'

function Shoot() {
	alert(["Card details:",
		"Lithin",
		"Software Engineer"]
		) 
	// body...
}
function Shots() {
	alert(["Card Details:","Rohith","Developer"])
	// body...
}
class App extends React.Component {
	render(){
	  return(
	    <div className='App'>
	        <Apps/>
	        <img src={profile} className="App-logo" alt="logo" />
	        <h4><b>Name:Lithin</b></h4>
            <p><b>Mobile No:</b>9999999999</p>
            <p><b>Email:</b>Lithin@gmail.com</p>
            <p><b>Skills:</b>Java,Python,HTML,CSS</p>
            <button onClick={Shoot}>click for details!</button>
        </div>
      );
    }
}

class Apps extends React.Component {
	render(){
        return(
           <div className='Apps'>
	            <img src={profile} className="App-logo" alt="logo" />
	            <h4><b>Name:Rohith</b></h4>
                <p><b>Mobile No:</b>9999988888</p>
                <p><b>Email:</b>Rohith@gmail.com</p>
                <p><b>Skills:</b>Java,Python,HTML,CSS</p>
                <button onClick={Shots}>click for details!</button>
            </div>
        ); 
	}
	
}
export default App;