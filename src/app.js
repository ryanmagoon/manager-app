import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import Router from './Router'

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDMSDuptMnWeQ-s2lv7vrgWxxz_NQdAU4g',
      authDomain: 'manager-b6e43.firebaseapp.com',
      databaseURL: 'https://manager-b6e43.firebaseio.com',
      projectId: 'manager-b6e43',
      storageBucket: 'manager-b6e43.appspot.com',
      messagingSenderId: '839712279872'
    }

    firebase.initializeApp(config)
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App
