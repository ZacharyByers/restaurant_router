import React from 'react'
import {
  Segment,
  Dimmer,
  Loader,
  Image,
  Grid,
  Header,
  List,
  Button
} from 'semantic-ui-react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const styles = {
  dimmer: {
    height: '100vh',
  },
}

export default class MenuItem extends React.Component {
  state = { menuItem: {}, loaded: false }

  componentDidMount() {
    const itemId = this.props.match.params.id
    axios.get(`/api/menu_items/${itemId}`)
      .then( res => {
        this.setState({ menuItem: res.data, loaded: true })
      })
      .catch( err => {
        console.log(err)
      })
  }

  displayMenuItem = () => {
    const { id, photo, name, description, price } = this.state.menuItem
    return(
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Image src={photo} rounded size='medium'/>
          </Grid.Column>
          <Grid.Column width={12}>
            <Header as='h3'>{name}</Header>
            <List>
              <List.Item>{description}</List.Item>
              <List.Item>${price}</List.Item>
            </List>
            <Button as={Link} to={`/menu_items/${id}/edit`} color='violet'>Edit</Button>
            <Button onClick={() => this.deleteMenuItem(id)} negative>Delete</Button>
            <Button as={Link} to='/menu'>Back</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }

  deleteMenuItem(id) {
    axios.delete(`/api/menu_items/${id}`)
      .then( res => {
        this.props.history.push('/menu')
      })
      .catch( err => {
        console.log(err)
      })
  }

  render() {
    if(this.state.loaded)
      return(
        <Segment compact>
          { this.displayMenuItem() }
        </Segment>
      )
    else
      return(
        <Segment basic>
          <Dimmer active style={styles.dimmer}>
            <Loader>Loading Product...</Loader>
          </Dimmer>
        </Segment>
      )
    }
}
