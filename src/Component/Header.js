import React from "react";
import header from './header.css'
import resume from '../images/resume.jpg'

import Button from '@mui/material/Button';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function Header(){

return(
<div className="container">

   < div className="left">

 <p >A <span>Resume </span>that stands out!</p>
  <p>Design Winning <span>Resume</span> With us!</p>


   </div>

 <div className="right">
<img src={resume} alt='Resume' />


 </div>

<Button sx={{ mr:"70%"}} variant="contained">Build Your resume</Button>
</div>

);





 


}

export default Header;