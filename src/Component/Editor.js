import React,{useState} from "react"; 
import style from './Editor.module.css'
import InputControl from './InputControl.js'




function Editor(props){
	
	
	const section=props.sections;
	
	const[activeSectionKey,setActiveSection]=useState(
	Object.keys(section)[0]);
	
	const workExpBody=(
	<div className={style.detail}>
	   <div className={style.row}>
	   <InputControl label="Title"/>
	   </div>
	   
	   <div className={style.row}>
	   <InputControl
	   label="title"
	   placeholder="Enter title eg. fronted developer"
	   />
	   </div>
	      
		  <div className={style.row}>
	   <InputControl
	   label="title"
	   placeholder="Enter title eg. fronted developer"
	   />
	       </div>
	</div>
	);
	
	const generateBody=()=>{
		
		switch(section[activeSectionKey]){
			case section.basicinfo: return workExpBody;
			case section.workExp: return workExpBody;
			case section.project: return workExpBody;
			case section.education: return workExpBody;
			case section.achievement: return workExpBody;
			case section.summary :return workExpBody;
			case section.other :return workExpBody;
			
		
		}
		
	};
	
	
return(

<div className={style.container}>

<div  className={style.header}>
	{Object.keys(section).map((key)=>(
	
	<div className={`${style.section} ${activeSectionKey==key ? style.active:""}`}
	key={key} onClick={()=>setActiveSection(key)}
	>
	
	
	{section[key]}</div>))}

</div>

<div className={style.body}>
<InputControl label="Title"/>
{generateBody()}
<button>save</button>
</div>

</div>
)
}

export default Editor;