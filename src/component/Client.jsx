import React from "react";

const Client = (props) => {
    return (<React.Fragment>
        <div>{props.clientData.title}</div>
        <div>{props.clientData.startDate}-{props.clientData.endDate}</div>
        <div>{props.clientData.employeeName}</div>
        <ul>
        {props.clientData.achievements && props.clientData.achievements.map((data)=>{
            return <li>{data}</li>
        })}
        </ul>
        </React.Fragment>  );
}
 
export default Client;