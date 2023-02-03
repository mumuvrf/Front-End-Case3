import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const servicos = [
        'Toxina botulínica',
        'Skinboosting',
        'Peeling facial',
        'Microagulhamento',
        'Limpeza de pele',
        'Lifting labial',
        'Harmonização facial'

    ]

    const [nome, setNome] = useState('')
    const [email,setEmail] = useState('')
    const [telefone,setTelefone] = useState('')
    const [cpf,setCpf] = useState('')
    const [servico,setServico] = useState('Toxina botulínica')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoClienteCadastrado({
            nome,
            email,
            telefone,
            cpf,
            servico
        })
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para realizar seu agendamento</h2>
                <CampoTexto
                 obrigatorio={true}
                  label="Nome"
                   placeholder="Digite seu nome"
                   valor={nome}
                   aoAlterado={valor => setNome(valor)}
                   />
                <CampoTexto
                 obrigatorio={true}
                  label="E-mail"
                   placeholder="Digite seu e-mail"
                   valor={email}
                   aoAlterado={valor => setEmail(valor)}
                    />
                <CampoTexto
                 obrigatorio={true}
                  label="Telefone"
                   placeholder="Digite seu telefone"
                   valor={telefone}
                   aoAlterado={valor => setTelefone(valor)}
                    />
                <CampoTexto
                 obrigatorio={true}
                  label="CPF"
                   placeholder="Digite seu CPF"
                   valor={cpf}
                   aoAlterado={valor => setCpf(valor)}
                    />
                <ListaSuspensa
                 obrigatorio={true}
                  label="Serviço"
                   itens={servicos} 
                   valor={servico}
                   aoAlterado={valor => setServico(valor)}/>
                <Botao texto="Finalizar agendamento"/>
            </form>
        </section>
    )
}

export default Formulario