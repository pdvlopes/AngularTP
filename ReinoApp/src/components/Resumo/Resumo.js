import React, {Component} from "react";
import { Button } from 'react-bootstrap';
import {URL_API} from "./../services/base";

class Resumo extends Component{

    state = {
        linguagens: []
    };

    componentDidMount() {
        fetch(URL_API+'/membros').then(res => res.json())
        .then(res => {
            this.setState({
                linguagens: res
            });
        });

        
        
            
    }

    render() {
        return (
            <div classname='container' id='c' >
         

            <div className="row">
                <div className="col">
                    <div className="card mt-2">
                        <div id='title'className="card-header">
                           Relatório de Membros
                        </div>
                        <table id='c'className="table table-bordered table-dark table-responsive">
                            <thead classname='thead-primary"'>
                                <tr id='ti'>
                                    <th>Nome</th>
                                    <th>Telefone</th>
                                    <th>Aniversário</th>
                                    <th>Idade</th>
                                    <th>Geração</th>
                                    <th>Líder</th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.linguagens.map((item, indice) => {
                                        return (
                                            <tr key={indice}>
                                                <td>{item.nome}</td>
                                                <td>{item.telefone}</td>
                                                <td>{item.datadenascimento}</td>
                                             
                                        <td>{item.idade}</td>
                                        <td>{item.lider}</td>
                                        <td>{item.geracao}</td>
                                        <td>         <Button variant="primary">Vizualizar</Button> </td>      
                                        <td>         <Button variant="success">Editar</Button> </td>   
                                        <td>         <Button variant="danger">Excluir</Button> </td>   
                                    
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                </div>
                </div>
        );
    }
}


export default Resumo;