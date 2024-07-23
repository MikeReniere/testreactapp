import React from 'react';

/* This is an example of class components (not used as much in new react)*/
class Car extends React.Component {
    constructor(props) {
        super(props)
        this.state = {brand: "Ford"}
    }

    render() {
        return(
            <div>
                <h1>My Car</h1>
            </div>
        );
    }
}
export default Car;