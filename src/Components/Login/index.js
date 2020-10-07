import React, {useState, useContext} from 'react';
import {Grid, Image, Button, Input, Form, Checkbox, Divider} from 'semantic-ui-react'
import {Link, useHistory} from 'react-router-dom'
import UserContext from '../../Context/UserContext'

import Foodtime from '../../assets/img/foodtime-mockup.jpg'
import './login.css'

function Login() {

  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {setCurrentUser} = useContext(UserContext)

  const handleSubmit= () => {
    if(
      email === 'damien.giron@arke.com' || password === '123AZERTY456'
      ){
      setCurrentUser({
        email,
        password,
        login:'Damien.G'
      })
      history.push('/loggedin')
    } else if(
      // eslint-disable-next-line no-useless-escape
      email === 'renaudbiemans@gmail.com' || password === "password/\ùnbr€àkable"
      ){
        setCurrentUser({
          email,
          password,
          login:'renaudbie'
        })
       } else if(
      email === 'Manfrya@Gmail.Com' || password === '**ilovemoman**'
       ){
        setCurrentUser({
          email,
          password,
          login:'Yannick63'
        })
       } else {
        console.error("erreur connexion");
      }
  }

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
    <Form onSubmit={()=>handleSubmit()}>
      <Form.Field>
        <Input
          placeholder='Email'
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />            
      </Form.Field>
      <Form.Field>
        <Input 
          placeholder='Mot de passe' 
          type="password"
          value={password}
          required
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