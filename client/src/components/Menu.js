import React from 'react'
import {
  Segment,
  Header,
  Table,
  Image,
  Dimmer,
  Loader
} from 'semantic-ui-react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import MenuForm from './MenuForm'

const styles = {
  dimmer: {
    height: '100vh',
  },
}

export default class Menu extends React.Component {
  state = { menuItems: [] }

  componentDidMount() {
    axios.get('/api/menu_items')
      .then( res => {
        this.setState({ menuItems: res.data })
      })
      .catch( err => {
        console.log(err)
      })
  }

  displayMenuItems = () => {
    return this.state.menuItems.map( item => {
      const { id, photo, name, description, price } = item
      return(
        <Table.Row>
          <Table.Cell>
            <Header as='h4' image>
              <Image src={photo} rounded size='mini' />
              <Header.Content>
                <Link to={`/menu_items/${id}`}>{name}</Link>
              </Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>${price}</Table.Cell>
          <Table.Cell>{description}</Table.Cell>
        </Table.Row>
      )
    })
  }

  menuLoader() {
    return(
      <Dimmer active style={styles.dimmer}>
        <Loader>Loading Products...</Loader>
      </Dimmer>
    )
  }

  render() {
    return(
      <Segment basic>
        <MenuForm/>
        <Table basic='very' celled collapsing>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Item Name</Table.HeaderCell>
              <Table.HeaderCell>Price</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            { this.state.menuItems.length > 0 ?
              this.displayMenuItems() :
              this.menuLoader()
            }
          </Table.Body>
        </Table>
      </Segment>
    )
  }
}
