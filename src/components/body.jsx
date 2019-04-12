import React, { Component } from 'react';
import '../css/body.css';
import {ShowInput} from '../js/main.js';

class Body extends Component{
   
	render(){
        return(

		
        <div id="body" className='content clearfix divborderdivborder'>
		
			<div className="userInput divborder">	
					
					<p className="pText">Please enter your details</p>
					
					<div id="nameInput">
					Name: 
					<input type="text" id="inName" name="name"/>
					</div>
					
					<div id="ageInput">
					Age: 
					<input type="number"  id="inAge" name="age"/>
					</div>
					
					<div id="genderInput">
					Gender:
						<input type="radio" id="genderMale" name="gender" value="Male"/>Male
						<input type="radio" id="genderFemale" name="gender" value="Female"/>Female
					</div>
					

					<div id="submitButton">
					<button className="button" name="submit" onClick={ShowInput}>Submit</button>
					</div>
					
				</div>
				
				<div className="userDisplay divborder" >
					
				<p id="changeText" ></p>
					
						<p className="pUserDisplay">
							<span id="nameDisplay"></span><br/>
							<span id="ageDisplay"></span><br/>
							<span id="genderDisplay"></span>
						</p>
				</div>				
				
        </div>
    
        );
    }
}

export default Body;