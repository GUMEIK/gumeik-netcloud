import React, { Component } from 'react'
import FIleList from './components/FilesList'
import Upload from './components/upload'
import {store} from './store/store'
import './store/store'
import {Provider} from 'react-redux'
export default class App extends Component {
  render() {
    
    return (
      <Provider store={store}>
        <Upload></Upload>
        <FIleList/>
      </Provider>
    )
  }
}
