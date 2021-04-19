const Skills = (props) => {
    return ( <div className="box-skills">
        <div className="header-label" >Computer Skills</div>
    <ul>
        {props.skillList.map((skill)=>{
            return <li>{skill}</li>
        })}
        
    </ul>
    </div>  );
}
 
export default Skills;