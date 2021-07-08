const App = () => {
    return (
        <div>
            < Tweet
                username= "@jimbo"
                name = "Jimmy Jimbo"
                date = "today"
                message = "Hello everyone"
            />
            < Tweet
                username= "@thisguy"
                name = "Someone"
                date = "the future"
                message = "I see you"
            />
            < Tweet
                username= "@POTUS"
                name = "Franklin D Roosevelt"
                date = "12-07-1941"
                message = "A date that will live in infamy"
            />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));