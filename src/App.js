import React, {Component} from 'react';
import Car from "./components/car/Car"

class App extends Component {
    cars = [
        {model: 'Mustang', year: 2001, hp: 400, color: 'red'},
        {model: 'Challenger', year: 2002, hp: 700, color: 'black'},
        {model: 'Barracuda', year: 2003, hp: 500, color: 'silver'},
        {model: 'Hemi Cuda', year: 2004, hp: 450, color: 'neonGreen'},
        {model: 'Camaro', year: 2005, hp: 355, color: 'brown'},
        {model: 'Carrera GT', year: 2006, hp: 800, color: 'blue'},
        {model: '918', year: 2007, hp: 350, color: 'yellow'},
        {model: '911', year: 2008, hp: 600, color: 'green'},
        {model: 'Megane RS', year: 2009, hp: 300, color: 'white'},
        {model: 'Clio RS', year: 2010, hp: 250, color: 'black'}
    ];

    render() {
        return (
            <div>
                {
                    this.cars.map((value, index) => {
                        let name = 'target';

                        if (index % 2) name = 'point';

                        return <Car item={value} clsName={name} key={index}/>
                    })
                }
            </div>
        );
    }
}

export default App;