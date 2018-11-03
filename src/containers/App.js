import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchLists } from '../actions';
import Lists from '../components/Lists'
import '../styles/App.css';

class App extends Component {
  handleRefreshClick = () => {
    const { dispatch } = this.props
    dispatch(fetchLists())
  }

  render() {
    const { lists, isFetching } = this.props
    const isEmpty = lists.items.length === 0

    return (
      <div className="App">
        <header className="App-header">
        <p>
          <button onClick={this.handleRefreshClick}> Load </button>
        </p>
        {isEmpty
          ? (isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
          : <div style={{ opacity: isFetching ? 0.5 : 1 }}>
              <Lists lists={lists.items} />
            </div>
        }
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
