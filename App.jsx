class App extends React.Component {
    state = {
        taskData : []
    };

    taskHandler = (val) => {
        let tempArray = this.state.taskData;
        tempArray.push(val);
        this.setState({taskData : tempArray});
    }

    removeTask = (val) => {
        let tempArray = this.state.taskData.filter((data) => {
            return val != data;
        }) 

        this.setState({taskData : tempArray});
    }

    render() {
        return (
            <div className = "container">
                <h1 className = "heading">TO-DO LIST</h1>
                <Input taskHandlerFunction = {this.taskHandler}/>
                <List 
                tasksArray = {this.state.taskData} 
                removeTaskHandler = {this.removeTask}
                />
            </div>    
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)
