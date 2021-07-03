
const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Anna" />
        </div>
        )
}

ReactDOM.render(<App/>, document.getElementById("root"));