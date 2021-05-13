import React, {Component} from "react";
import { Button } from 'react-bootstrap';
import {URL_API} from './../services/base';

class Lideres extends Component{

    state = {
        linguagens: []
    };

    componentDidMount() {
        fetch(URL_API+'/lideres').then(res => res.json())
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
                           Relatório de Líderes
                        </div>
                        <table id='c'className="table table-bordered table-dark table-responsive">
                            <thead classname='thead-primary"'>
                                <tr id='ti'>
                                    <th>Nome</th>
                                    <th>Telefone</th>
                                    <th>Email</th>
                                    <th>situação</th>
                           
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
                                                <td>{item.email}</td>
                                             
                                        <td>{item.situacao}</td>
                                  
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


export default Lideres;