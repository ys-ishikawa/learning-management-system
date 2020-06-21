import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppContext from '../contexts/AppContext';
import reducer from '../reducers'
import ItemsForm from './ItemsForm'
import ItemsList from './ItemsList'

const App = () => {

  const initialState = {
    items: []
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{state, dispatch}}>
      <div className="container-fluid">
        <ItemsForm />
        <hr/>
        <ItemsList />
      </div>
    </AppContext.Provider>
  )
}

export default App