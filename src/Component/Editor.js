import React from "react";
import style from './Editor.module.css'




function Editor(props){
	
	const section=props.sections;

return(

<div className={style.container}>

<div  className={style.header}>
	{Object.keys(section)?.map((key)=>(<div >{section[key]}</div>))}

</div>
</div>
)
}

export default Editor;