import React, { Component} from "react";
import Grid from "../template/grid";
import IconButton from "../template/iconButton";
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { add, changeDescription, search, clear } from "./todoAction";

class todoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.dind(this)
    }
        componentWillMount(){
            this.props.search()
        }
    keyHandler(e) {
        const { add, clear, search, description } = this.props
        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description)
        } else if (e.key === 'Escape') {
            clear()
        }
    }
        render(){
            const { add, search, description } = this.props
            return (
                <div role="form" className="todoForm">
        
                <Grid cols='12 9 10'>
                    <input id="description" className="form-control" placeholder="Adicione uma tarefa"
                    onChange={props.changeDescription}
                    value={props.description}
                    onKeyUp={this.keyHandler}></input>
                    </Grid>
                    <Grid cols='12 3 2'>
                        <IconButton style='primary' inco='plus' onClick={() => add(description)}></IconButton>
                        <IconButton style='info' icon='search' onClick={search}></IconButton>
                        <IconButton style='default' icon='close' onClick={(this.props.clear)}></IconButton>
                </Grid>
            </div>

            )
        }

    }


const  mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch => 
    bindActionCreators({ add,changeDescription,  search, clear }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(todoForm)