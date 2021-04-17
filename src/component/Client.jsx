const Client = (props) => {
    return (<div>
        <div>{props.clientData.title}</div>
        <div>{props.clientData.startDate}-{props.clientData.endDate}</div>
        <div>{props.clientData.employeeName}</div>
        {props.clientData.achievements}
        </div>  );
}
 
export default Client;