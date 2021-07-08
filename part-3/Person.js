const Person = (props) => (
    <p>
        <b>
        {props.name}
        </b> :
        {props.age} -
        < CanVote age = {props.age} />
        <br/>
        Hobbies:
        < HobbyList hobbies = {props.hobbies} />
    </p>
)