const HobbyList = ({hobbies}) => {
    return (
        <ul>
            {hobbies.map( hobby => < Hobby hobby = {hobby} /> )}
        </ul>
    )
}