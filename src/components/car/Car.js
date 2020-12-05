import React, {Component} from 'react';
import('./Car.css');

class Car extends Component {
    render() {
        const {item, clsName} = this.props;

        return (
            <div className={clsName}>
                Model: {item.model};
                Year: {item.year};
                Horse powers: {item.hp};
                Color: {item.color};
            </div>
        );
    }
}

export default Car;