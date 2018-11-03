import React, { Component } from 'react'
import { connect } from 'react-redux'
import logo from './logo.svg';
import { fetchLists } from '../actions';
import Lists from '../components/Lists'
import '../styles/App.css';

class App extends Component {
  handleRefreshClick = () => {
    const { dispatch } = this.props
    dispatch(fetchLists())
  }

  render() {
    const { lists } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button onClick={this.handleRefreshClick}> Load </button>
        </p>
        {lists.items.cata({
          Nothing: () => <h2>Not Loaded</h2>,
          Empty: () => <h2>Empty List</h2>,
          Just: lists => <Lists lists={lists} />
        })}
        </header>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(App)
