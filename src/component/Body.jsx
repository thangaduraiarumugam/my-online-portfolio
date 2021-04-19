import Summary from './Summary';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import ContactUs from './ContactUs';
import {SummaryData,EducationData,SkillList,ClientList} from '../data/resume';
const Body = () => {
    return ( <div className="box-body body-container" >
        <Summary summaryData = {SummaryData}/>
        <Skills skillList = {SkillList}/>
        <Experience clientList={ClientList}/>
        <Education educationData={EducationData}/>
        <ContactUs/>
    </div> );
}
 
export default Body;