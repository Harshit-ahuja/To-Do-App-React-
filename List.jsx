function List(props){
    return (
        <ul className = "list-container">
            {
                props.tasksArray.map((data, index) => {
                    return (
                        <ListElement  
                        key = {index} 
                        taskValue = {data}
                        removeTaskHandler = {props.removeTaskHandler} />
                    )
                })
            }
        </ul>
    )
}