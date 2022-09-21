import React from "react";
import header from './header.css'
import resume from '../images/resume.jpg'
function Header(){

return(
<div className="container">
<div className="left">

 <p >A <span>Resume </span>that stands out!</p>
  <p>Design Winning <span>Resume</span> With us!</p>


</div>

<div className="right">
<img src={resume} alt='Resume' />
</div>


</div>

);





 


}

export default Header;