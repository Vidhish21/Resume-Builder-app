import React,{useState} from "react"; 
import styles from './Editor.module.css'
import InputControl from './InputControl.js'




function Editor(props){
	
	
	const section=props.sections;
	
	const[activeSectionKey,setActiveSection]=useState(
	Object.keys(section)[0]);
	
	
	const workExpBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Title"
          placeholder="Enter title eg. Frontend developer"
         
        />
        <InputControl
          label="Company Name"
          placeholder="Enter company name eg. amazon"
         
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Certificate Link"
          placeholder="Enter certificate link"
        
        />
        <InputControl
          label="Location"
          placeholder="Enter location eg. Remote"
         
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Start Date"
          type="date"
          placeholder="Enter start date of work"
        
        />
        <InputControl
          label="End Date"
          type="date"
          placeholder="Enter end date of work"
       
        />
      </div>

      <div className={styles.column}>
        <label>Enter work description</label>
        <InputControl
          placeholder="Line 1"
  
        />
        <InputControl
          placeholder="Line 2"
         
        />
        <InputControl
          placeholder="Line 3"
          
        />
      </div>
    </div>
  );
  const projectBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Title"
         
          
        />
      </div>
      <InputControl
        label="Overview"
        
        placeholder="Enter basic overview of project"
       
        
      />
      <div className={styles.row}>
        <InputControl
          label="Deployed Link"
         
        />
        <InputControl
          label="Github Link"
          
          placeholder="Enter github link of project"
         
        />
      </div>
      <div className={styles.column}>
        <label>Enter project description</label>
        <InputControl
          placeholder="Line 1"
       
        />
        <InputControl
          placeholder="Line 2"
  
        />
        <InputControl
          placeholder="Line 3"
          
        />
        <InputControl
          placeholder="Line 4"
          
        />
      </div>
    </div>
  );
  const educationBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Title"
          
          placeholder="Enter title eg. B-tech"
         
        />
      </div>
      <InputControl
        label="College/School Name"
       
        placeholder="Enter name of your college/school"
        
      />
      <div className={styles.row}>
        <InputControl
          label="Start Date"
          type="date"
          placeholder="Enter start date of this education"
        
        />
        <InputControl
          label="End Date"
          type="date"
          placeholder="Enter end date of this education"
       
        />
      </div>
    </div>
  );
  const basicInfoBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Name"
          placeholder="Enter your full name eg. Aashu"
          
        
        />
        <InputControl
          label="Title"
          
          placeholder="Enter your title eg. Frontend developer"
        
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Linkedin Link"
          
          placeholder="Enter your linkedin profile link"
        
        />
        <InputControl
          label="Github Link"
          
          placeholder="Enter your github profile link"
        
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Email"
          
          placeholder="Enter your email"
         
        />
        <InputControl
          label="Enter phone"
         
          placeholder="Enter your phone number"
        
        />
      </div>
    </div>
  );
  const achievementsBody = (
    <div className={styles.detail}>
      <div className={styles.column}>
        <label>List your achievements</label>
        <InputControl
          placeholder="Line 1"
         
        />
        <InputControl
          placeholder="Line 2"

        />
        <InputControl
          placeholder="Line 3"
  
        />
        <InputControl
          placeholder="Line 4"
         
        />
      </div>
    </div>
  );
  const summaryBody = (
    <div className={styles.detail}>
      <InputControl
        label="Summary"
    
      />
    </div>
  );
  const otherBody = (
    <div className={styles.detail}>
      <InputControl
        label="Other"
     
      />
    </div>
  );
	
	
	
	
	
	
	
	
	const generateBody=()=>{
		
		switch(section[activeSectionKey]){
			case section.basicinfo: return basicInfoBody;
			case section.workExp: return workExpBody;
			case section.project: return projectBody;
			case section.education: return educationBody;
			case section.achievement: return achievementsBody;
			case section.summary :return summaryBody ;
			case section.other :return otherBody;
			
		
		}
		
	};
	
	
return(

<div className={styles.container}>

<div  className={styles.header}>
	{Object.keys(section).map((key)=>(
	
	<div className={`${styles.section} ${activeSectionKey==key ? styles.active:""}`}
	key={key} onClick={()=>setActiveSection(key)}
	>
	
	
	{section[key]}</div>))}

</div>

<div className={styles.body}>
<InputControl label="Title"/>
{generateBody()}
<button>save</button>
</div>

</div>
)
}

export default Editor;