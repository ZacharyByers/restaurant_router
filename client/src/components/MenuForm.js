import React from 'react'
import axios from 'axios'
import { Form, Segment, Button, Container, Label, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class MenuForm extends React.Component {
  state = { menuItem: { name: '', description: '', price: 0, photo: 'https://robohash.org/'}}

  componentDidMount() {
    const match = this.props.match
    if(match)
      axios.get(`/api/menu_items/${match.params.id}`)
        .then( res => {
          this.setState({ menuItem: res.data })
        })
        .catch( err => {
          console.log(err)
        })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { id, name, description, price, photo } = this.state.menuItem
    let url = '/api/menu_items'
    url = id ? `${url}/${id}` : url

    let params = { menu_item: { name, description, price, photo } }

    debugger

    if(id)
      axios.put(url, params)
        .then( res => {
          this.props.history.push(`/menu_items/${id}`)
        })
        .catch( err => {
          console.log(err)
        })
    else
      axios.post(url, params)
        .then( res => {
          window.location.reload()
        })
        .catch( err => {
          console.log(err)
        })

  }

  handleChange = (e) => {
    const { id, value } = e.target
    this.setState({ menuItem: { ...this.state.menuItem, [id]: value } })
  }

  cancelButton = () => {
    const { id } = this.state.menuItem
    if(id)
      return(
        <Button as={Link} to={`/menu_items/${id}`}>Cancel</Button>
      )
  }

  render() {
    const { name, price, description, photo } = this.state.menuItem
    return(
      <Grid>
        <Grid.Column width={8}>
          <Form onSubmit={this.handleSubmit}>
            <label>Item Name</label>
            <Form.Input onChange={this.handleChange} id='name' value={name}></Form.Input>

            <label>Price</label>
            <Form.Input onChange={this.handleChange} id='price' value={price}></Form.Input>

            <label>Item Description</label>
            <Form.Input onChange={this.handleChange} id='description' value={description}></Form.Input>

            <label>Photo URL</label>
            <Form.Input onChange={this.handleChange} id='photo' value={photo}></Form.Input>
            <Button primary type='submit'>Save</Button>
            { this.cancelButton() }
          </Form>
        </Grid.Column>
      </Grid>
    )
  }

}
