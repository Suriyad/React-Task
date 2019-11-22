import React from 'react';
import college from './props3'
class Degree extends React.Component {
    state = {
        dept: "ECE",
        rollno: 77,
    }
    render() {
        const { dept, rollno } = this.state

        return (
            <div>My department is {dept}
                <college branch={dept} />
            </div>
        )

    }
}
export default Degree;