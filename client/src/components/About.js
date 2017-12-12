import React from 'react'
import { Segment, Header } from 'semantic-ui-react'
import axios from 'axios'

class About extends React.Component {
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
    const { address, phone } = this.state.restaurant
    return(
      <Segment>
        <Segment basic>Address: {address}</Segment>
        <Segment basic>phone: {phone}</Segment>
      </Segment>
    )
  }
}

export default About
