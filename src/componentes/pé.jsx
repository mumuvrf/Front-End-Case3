import React, { Component } from 'react';

class Footer extends Component{
    state = { };

    footerStyle = {
        width : '100%',
        backgroundColor : '#E87060'
    };

    footerBox = {
        paddingTop: 20,
        paddingBottom: 20,
        width: 750,
        margin: '0 auto'
    };

    ulStyle = {
        color: 'white',
        fontSize: 18,
        display: 'inline-block',
	    verticalAlign: 'middle',
        boxSizing: 'border-box',
	    //width: '20%',
	    marginRight: '50px'
    }

    render (){
        return (
            <div style={this.footerStyle}>
                <div style={this.footerBox}>
                    <ul>
                        <li style={this.ulStyle}><img src="https://i.imgur.com/Hf5xlg0.png" HEIGHT='200' WIDTH='200' /></li>
                        <li style={this.ulStyle}>
                            <p>Telefone</p>
                            <p>(XX)XXXXX-XXXX</p>
                            <br />
                            <p>Horário de atendimento</p>
                            <p>Segunda à sexta</p>
                            <p>Das 9h às 18h</p>
                        </li>
                        <li style={this.ulStyle}>
                            <p>Email</p>
                            <p>email@email.com</p>
                            <br />
                            <p>Endereço</p>
                            <p>Avenida rua do beco, NN</p>
                            <p>São José dos Campos - SP</p>
                        </li>
                    </ul>
                    
                </div>
            </div>
        );
    }
}

export default Footer;