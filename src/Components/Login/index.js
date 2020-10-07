import React from 'react';
import {Button, Input, Grid, Radio} from 'semantic-ui-react'
import Foodtime from '../../assets/img/foodtime-mockup.jpg'
function Login() {

return (
  <Grid>
    <Grid.Column>
      <div id='logo'>
        <img src={Foodtime} alt='foodtime' />
      </div>
      <div id='login'>
        <h1>Connexion</h1>
        <Input placeholder='Email' type="email"/>
        <Input placeholder='Mot de passe' type="password"/>
        <Radio label='Rester connecté' />
        <Button primary >Se connecter</Button>
        <hr />
        <h3>Mot de passe oublié ?</h3>
      </div>
    </Grid.Column>
  </Grid>
)

} 

export default Login