import React from "react";
import header from './header.css'
import resume from '../images/resume.jpg'

import Button from '@mui/material/Button';
import Editor from './Editor.js'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function Header(){
	
	const sections={
		basicinfo: "Basic Info",
		workExp: "work Experience",
		project: "project",
		education: "Education",
		achievement: "Achevement",
		summary: "Summary",
		other: "other",
		
	};
	

return(
<div className="container">

   < div className="left">

 <p >A <span>Resume </span>that stands out!</p>
  <p>Design Winning <span>Resume</span> With us!</p>


   </div>

 <div className="right">
<img src={resume} alt='Resume' />
</div>


<button type="button" className="btn btn-primary ">Build Your Resume<i className="bi bi-arrow-down-short"></i></button>
<div>
<Editor sections={sections}/>
</div>
</div>

);
}

export default Header;