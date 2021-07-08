const App = () => {
    return (
        <div>
            < Person
                name="Jimbo"
                age={19}
                hobbies = {[
                    "running",
                    "swimming",
                    "gardening"
                ]}
            />
            < Person
                name="James"
                age={37}
                hobbies = {[
                    "walking",
                    "floating",
                    "horticulture"
                ]}
            />
            < Person
                name="Jimmy"
                age={12}
                hobbies = {[
                    "dancing",
                    "polo",
                    "playing guitar"
                ]}
            />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));