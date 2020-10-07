import React, {useState} from 'react';
import {Grid, Image, Button, Input, Form, Checkbox, Divider} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import Foodtime from '../../assets/img/foodtime-mockup.jpg'
import './login.css'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
    <Form onSubmit={()=>console.log(email, password)}>
      <Form.Field>
        <Input
          placeholder='Email'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />            
      </Form.Field>
      <Form.Field>
        <Input 
          placeholder='Mot de passe' 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox label='Rester connecté' />
      </Form.Field>
      <Button 
        type='submit'
        primary
        onClick={()=>console.log(email, password)}
      >Se connecter</Button>
    </Form>
    <Divider />
    <Link to='/forgot-password'>Mot de passe oublié ?</Link>
  </div>
    </Grid.Column>
  </Grid>
)

} 

export default Login