const CanVote = ({age}) => {
    if( age < 18 ){
        return (
            <span>
                You must be 18
            </span>
        )
    }
    else{
        return (
            <span>
                Please go vote!
            </span>
        )
    }
}