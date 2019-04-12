import React, { Component } from 'react';

class Header extends Component{
    render(){
        return(
            <div id="header" className='divborder'>
                <h1 align="center">Welcome to This Page!</h1>
				<h3 align="center" id="changeDisplay">This is a simple form page.</h3>
				<hr/>
            </div>
        );
    }
}

export default Header;