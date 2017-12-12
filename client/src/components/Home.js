import React from 'react'
import { Header } from 'semantic-ui-react'
import axios from 'axios'

class Home extends React.Component {
  state = { restaurant: {} }

  componentDidMount() {
    axios.get('/api/restaurant/1')
      .then( res => {
        this.setState({ restaurant: res.data })
      })
      .catch( err => {
        console.log(err)
      })
  }

  render() {
    const { name } = this.state.restaurant
    return(
      <Header as='h1' textAlign='center'>Welcome to {name} Barbecue/Grill/Diner/Cafe!</Header>
    )
  }
}

export default Home
