const Tweet = (props) => {
    
    return (<ul>
            <li>{props.username}</li>
            <li>{props.name}</li>
            <li>{props.date}</li>
            <li>{props.tweet}</li>
            </ul>)
}

const App = () => {
    return(
        <div>
            <Tweet username="mojojojo" name="Anna" date="6.3.2021" tweet="Hello" />
            <Tweet username="SHbob" name="Bob" date="6.4.2021" tweet="Kill Bart" />
            <Tweet username="SpeedRacer" name="Perry" date="6.4.2021" tweet="Hello" />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));