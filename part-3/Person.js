const Person = (props) => {
    let { hobbies } = props 
    
    return(
        <div>
        <p>Learn more information about this person</p>
        <p>Name: {props.name.slice(0,6)}</p>
        <p>Age: {props.age}</p>
        <p>{props.age > 18 ? "Go Vote!" : "You must be 18!"}</p>
        <p>Hobbies:</p>
        <ul>
            {hobbies.map(hobby => <li>{hobby}</li>)}
        </ul>
        </div>
        
    )
}