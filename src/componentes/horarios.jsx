import React, { Component } from 'react';

class Horarios extends Component{
    state = {
        horarios: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
        horarios_ocupados: [9, 12, 15, 16],
        horarios_livres: []
    };

    render (){
        return (
            <div>
                <ul>
                    { this.state.horarios.map(horarios => <li>{horarios}</li>)}
                </ul>
            </div>
        );
    }
}

export default Horarios;