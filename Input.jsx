class Input extends React.Component {

    state = {
        task : ""
    };

    render() {
        return (
            <div className = "input-container">
                <input 
                type = "text" 
                placeholder = "Enter You Task Here"
                className = "input"
                value = {this.state.task}
                onChange = {(e) => {
                    this.setState({task : e.currentTarget.value})
                }}
                >
                </input>
                <button 
                className = "submit"
                onClick = {() => {
                    this.props.taskHandlerFunction(this.state.task);
                    this.setState({task : ""});
                }}
                > 
                SUBMIT </button>
            </div>
        )
    }
}

// export default Input;