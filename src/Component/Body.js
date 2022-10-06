import React from "react";
import styles from "./Body.module.css"
import Editor from "./Editor.js"

function Body()
{
const colors=["#48bb78","#48bb78","#48bb78","#48bb78"];

	
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
		 <button type="button" className="btn btn-primary ">Build Your Resume</button>
    </div>
	<Editor sections={sections}/>
</div>

);
}
export default Body;