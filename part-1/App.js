const App = () =>{
    return (
        <div>
            < FirstComponent />
            < NamedComponent name="Jimbo" />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));