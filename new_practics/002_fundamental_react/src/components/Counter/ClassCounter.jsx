import React from 'react';

class ClassCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: 10,
            value: 0,
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this)
    }
    increment = () => this.setState({likes: this.state.likes + this.state.value})
    decrement = () => this.setState({likes: this.state.likes - this.state.value})
    render () {
        return (
            <div>
                <div className={"likes"}>
                    {this.state.likes} | {this.state.value}
                </div>
                <div>
                    <input onChange={event => this.setState({ value: Number(event.target.value)})} value={this.state.value}/>
                    <button type={"button"} onClick={this.increment}>+</button>
                    <button type={"button"} onClick={this.decrement}>-</button>
                </div>
            </div>
        )
    }
}

export default ClassCounter;
