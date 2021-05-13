import React, {Component} from "react";
import { Button } from 'react-bootstrap';
import {URL_API} from './../services/base';
import Card from './../Cards/Card';
import {ResponsiveEmbed, Image} from 'react-bootstrap';


import logo from "./../img/logo512.png";


class Home extends Component{

    render(){
        return(
    
            <div className="container d-flex justify-content-center" id="logo">
            <div className="align-self-center" id="logo">

                <h1 id='tit'className="container d-flex justify-content-center">Reino App</h1>
                <h1 className="container d-flex justify-content-center"></h1>
                <p></p>
                <p>
                    
                      
                     
                    </p>
        
              
            
                
               
  <Image stylesheet='margin-top: 50%; ;'src={logo}roundedCircle />


            </div>
            </div>

        );
    }
}

export default Home;