import {SkillList} from '../data/resume';

const Skills = () => {
    return ( <div className="box-skills">Computer Skills
    <ul>
        {SkillList.map((skill)=>{
            return <li>{skill}</li>
        })}
        
    </ul>
    </div>  );
}
 
export default Skills;