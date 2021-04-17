import Summary from './Summary';
import Skills from './Skills';
import Experience from './Experience';

const Body = () => {
    return ( <div className="box-body body-container" >
        <Summary/>
        <Skills/>
        <Experience/>
    </div> );
}
 
export default Body;