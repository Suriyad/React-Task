import React from 'react';

class Numbers extends React.Component {
    state = {
        no: 0
    }
    increment = (e) => {
        this.setState({
            no: this.state.no + 1

        })
    }
    decrement = (e) => {
        this.setState({
            no: this.state.no - 1

        })
    }
    render() {
        const { no } = this.state
        return (
            <div>Number: {no}<br />
                <button onClick={this.increment}>Increment</button>
                <button className={this.state.no <= 0 && "hide"} onClick={this.decrement}>Decrement</button>

            </div >
        )
    }
}
export default Numbers;