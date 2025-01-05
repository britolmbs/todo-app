import React, { Component } from "react";
import PageHeader from "../template/pageHeader";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

export default class Todo extends Component {
   constructor(props) {
    super(props)
    this.hendleAdd = this.hendleAdd.bind(this)
   }
    hendleAdd() {
    
   }
   
    render() {
        return (
            <div>
              <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
            <TodoForm hendleAdd={this.hendleAdd} />
            <TodoList />
            </div>
        )
    }
}