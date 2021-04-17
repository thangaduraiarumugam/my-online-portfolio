import Client from './Client';
import {ClientList} from '../data/resume';

const Experience = () => {
  return <div className="box-experience">Experience
    {
        ClientList.map((data)=>{
            return <Client clientData={data}/>
        })
    }
    
  </div>;
};

export default Experience;
