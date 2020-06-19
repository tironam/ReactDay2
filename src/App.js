import React, { Component } from 'react'
import User from './Components/User'
import Form from './Components/Form'

class App extends Component {

  state = {
    name: '',
    movie: '',
    game: '',
    food: '',
    song: '',
    users: []
  }

  // plusIncrement = event => {
  //   this.setState({ count: this.state.count + 1 })
  // }

  // minusIncrement = event => {
  //   this.setState({ count: this.state.count - 1 })
  // }

  // plusFifty = event => {
  //   this.setState({ count: this.state.count + 50 })
  // }

  // minusThirty = event => {
  //   this.setState({ count: this.state.count - 30 })
  // }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
      let user = {
        name: this.state.name,
        movie: this.state.movie,
        game: this.state.game,
        food: this.state.food,
        song: this.state.song
      }

      let users = JSON.parse(JSON.stringify(this.state.users))

      users.push({
        name: this.state.name,
        movie: this.state.movie,
        game: this.state.game,
        food: this.state.food,
        song: this.state.song
      })

      this.setState({ 
        users ,
          name: '',
          movie: '',
          game: '',
          food: '',
          song: '' 
      })
    }

render () {
    return (
      <>
        <Form 
          name={this.state.name}
          movie={this.state.movie}
          game={this.state.game}
          food={this.state.food}
          song={this.state.song}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit} />
        {
          // Map over the users and render all the user cards
          this.state.users.map(user => <User user = {user} />)
        }
      </>
    )
  }
}

export default App
