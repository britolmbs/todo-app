import React from "react";
import { connect } from 'react-redux'
import IconButton from "../template/iconButton";
import { bindActionCreators } from "redux";
import { markAsDone , markAsPending, remove } from "./todoAction";

const TodoList =  props => {
    const renderRows = () => {
        const list = props. list || []
       return list.map(todo => (
        <tr key={todo._id}>
            <td className={todo.done ? 'markedAsDone' : '' }>{todo.description}</td>
            <td>
                <IconButton style='success' icon='check' hide={todo.done}
                onClinck={() => props.markAsDone(todo)}></IconButton>
                <IconButton style='warning' icon='undo' hide={!todo.done}
                onClinck={() => props.markAsPending(todo)}></IconButton>
                <IconButton style='danger' icon='trash-o' hide={!todo.done}
                onClinck={() => props.remove(todo)}></IconButton>
            </td>
            </tr>
       ))
    }
   return (
    <table className="table">
        <thead>
           <tr>
            <th>Descrição</th>
            <th className="tableActions">Ações</th>
           </tr>
        </thead>
        <tbody>
            {renderRows()}
        </tbody>
    </table>
   )
}
const mapDispatchToProps = dispatch => bindActionCreators({ markAsDone, markAsPending, remove}, dispatch)
const mapStateToProps = state => ({list: state.todo.list })
export default connect(mapStateToProps , mapDispatchToProps)(TodoList)