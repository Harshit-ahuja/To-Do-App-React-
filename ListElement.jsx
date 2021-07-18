function ListElement(props) {
    return (
        <li className = "task">
            <span> {props.taskValue} </span>
            <button
            className = "delete-button"
            onClick = {() => {
                props.removeTaskHandler(props.taskValue);
            }}> 
            X 
            </button>
        </li>
    )
}