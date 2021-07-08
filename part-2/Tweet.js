const Tweet = (props) => {
    return (
        <div>
            < MetaData date={props.date} name={props.name} username={props.username} />
            <p>
                {props.message}
            </p>
        </div>
    )
}