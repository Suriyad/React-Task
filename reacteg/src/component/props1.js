import React from 'react';
class Car extends React.Component {
    render() {
        return (<h2>This is my  {this.props.colour} colour car</h2>)
    }
}
class Mycar extends React.Component {
    render() {
        return (
            <div>
                <h3>I like car</h3>
                <Car colour="red" />
            </div>
        )
    }
}
export default Mycar;