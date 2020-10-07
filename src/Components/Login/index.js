import React from 'react';
import {Grid, Image, Button, Input, Form, Checkbox} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import Foodtime from '../../assets/img/foodtime-mockup.jpg'
import './login.css'

function Login() {

return (
  <Grid textAlign='center' verticalAlign='middle' >
    <Grid.Column width={6}>
      <div id='logo'>
        <Image src={Foodtime} alt='foodtime' />
      </div>
    </Grid.Column>
    <Grid.Column width={6}>
    <div id='login'>
    <h4>Connexion</h4>
    <Form>
      <Form.Field>
        <Input placeholder='Email' type="email"/>            
      </Form.Field>
      <Form.Field>
        <Input placeholder='Mot de passe' type="password"/>
      </Form.Field>
      <Form.Field>
        <Checkbox label='Rester connecté' />
      </Form.Field>
      <Button type='submit' primary >Se connecter</Button>
    </Form>
    <hr />
    <Link to='/forgot-password'>Mot de passe oublié ?</Link>
  </div>
    </Grid.Column>
  </Grid>
)

} 

export default Login