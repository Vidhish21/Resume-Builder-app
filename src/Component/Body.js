import React from "react";
import styles from "./Body.module.css"
import Editor from "./Editor.js"
import { ArrowDown } from 'react-feather';

function Body()
{
const colors=["#48bb78","#48bb78","#48bb78","#48bb78"];

	
	const sections={
		basicinfo: "Basic Info",
		workExp: "Work Experience",
		project: "Project",
		education: "Education",
		achievement: "Achievement",
		summary: "Summary",
		other: "Other",
		
	};

  /*  // State Related to store information....
	//const [resumeInformation,setResumeInformation]=useState({
		
	//});*/



return(
<div className={styles.container}>
   <p className={styles.heading}>Resume Builder</p>
    <div className={styles.toolbar}>
	     <div className={styles.colors}>
   
   {colors.map((item)=>(
   <span
   key={item}  
   style={{backgroundColor:item}} 
   className={styles.color}
   />
   ))}

         </div>
		 <button className={styles.btn}>Download <ArrowDown/></button>
    </div>
	<Editor sections={sections}/>
</div>

);
}
export default Body;