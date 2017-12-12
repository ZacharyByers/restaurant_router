import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import { isAuthenticated, logout } from '../fakeAuth'

const styles = {
  activeNav: {
    textDecoration: 'underline',
    backgroundColor: 'black',
    color: 'white',
  },
}


class Navbar extends React.Component {
  state = { activeClass: '', loggedIn: isAuthenticated() }

  handleClick = (e, { name }) => this.setState({ activeClass: name })

  dummyFunction() {}

  authLinks = () => {
    const { activeClass } = this.state
    if (isAuthenticated())
      return(
        [
          <
            Menu.Item
            name='menu'
            active={activeClass === 'menu'}
            onClick={this.handleClick}
          >
            <NavLink exact to='/menu'>
              Menu
            </NavLink>
          </Menu.Item>,
          <Menu.Item onClick={this.dummyFunction}>
            <a href='#' onClick={ logout }>Log Out</a>
          </Menu.Item>
        ]
      )
    else
      return(
        <
          Menu.Item
          name='login'
          active={activeClass === 'login'}
          onClick={this.handleClick}
        >
          <NavLink exact to='/login'>Login</NavLink>
        </Menu.Item>
      )
}

  render() {
    const { activeClass } = this.state
    return(
      <Menu compact>
        <
          Menu.Item
          name='home'
          active={activeClass === 'home'}
          onClick={this.handleClick}
        >
          <NavLink exact to='/'>Home</NavLink>
        </Menu.Item>
        <
          Menu.Item
          name='about'
          active={activeClass === 'about'}
          onClick={this.handleClick}
        >
          <NavLink exact to='/about'>About</NavLink>
        </Menu.Item>
        { this.authLinks() }
      </Menu>
    )
  }
}

export default Navbar
