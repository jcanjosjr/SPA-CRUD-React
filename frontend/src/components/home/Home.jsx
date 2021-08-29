import React from 'react'
import Main from '../template/Main'

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
    <Main icon="home" title="Início" 
        subtitle="Segundo projeto em React.">
            <div className="display-4">Bem vindo!</div>
            <hr />
            <p className="mb-0">Sistema para exemplificar a construção
                de um cadastro desenvolvido com React!</p>
    </Main>
