import Client from './Client';
const Experience = (props) => {
  return <div className="box-experience">
    <div className="header-label" >Experience</div>
    {
        props.clientList.map((data)=>{
            return <Client clientData={data}/>
        })
    }
    
  </div>;
};

export default Experience;
