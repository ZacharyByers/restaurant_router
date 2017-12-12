import React from 'react'
import { Segment, Button, Header } from 'semantic-ui-react'
import { login } from '../fakeAuth'

const loginButtonClick = (history) => {
  login()
  history.push('/menu')
}

const Login = ({ history }) => (
  <Segment basic>
    <Header as='h3'>Login</Header>
    <Button primary onClick={() => loginButtonClick(history)}>
      Login to App
    </Button>
  </Segment>
)

export default Login
