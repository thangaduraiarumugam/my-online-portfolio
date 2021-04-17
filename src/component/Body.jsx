import Summary from './Summary';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';

const Body = () => {
    return ( <div className="box-body body-container" >
        <Summary/>
        <Skills/>
        <Experience/>
        <Education/>
    </div> );
}
 
export default Body;