const Education = (props) => {
    return (
      <div className="box-education">
        <div className="header-label">Education</div>
        <ul>
        { props.educationData && props.educationData.map((data)=>{
            return <li>{data.University}<br/>
             {data.Location}<br/>
             {data.FieldOfStudy}<br/>
             </li>
        })}
        </ul>
      </div>
    );
}
 
export default Education;