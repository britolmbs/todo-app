import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  todo: () => ({
    description: 'ler livro',
    list: [{
        _id: 1,
        description: 'ler livro',
        done: true
    },{
        _id: 2,
        description: 'Reunião',
        done: false
    }, {
        _id: 3,
        description: 'consulta medica',
        done: false
    }]
  })  
})

export default rootReducer