import React, { Component } from 'react';

class Form extends Component{
    state = {
        horarios: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
        procedimentos: ['Toxina Botulínica', 'Skinboosting']
    };

    formStyle = {
        textAlign: 'center',
        lineHeight: 1.5
    }



    render (){
        return (
            <form style={this.formStyle}>
                <label>Escolha uma data</label><br />
                <input type="date" /><br />
                <label>Escolha um horário</label><br />
                <ul>
                    { this.state.horarios.map(horarios => <li>
                        <input type="radio"/><label>{horarios}</label>
                    </li>)}
                </ul>
                <label>Procedimentos preferidos</label><br />
                <ul>
                    { this.state.procedimentos.map(procedimentos => <li>
                        <input type="checkbox"/><label>{procedimentos}</label>
                    </li>)}
                </ul>
                <input type="button" /><br />
            </form>
        );
    }
}

export default Form;