import React, {useState, useContext} from 'react';
import { Button, Input, Form, Checkbox, Divider} from 'semantic-ui-react'
import {Link, useHistory} from 'react-router-dom'
import UserContext from '../../Context/UserContext'
import {toast} from 'react-toastify'
import RememberContext from '../../Context/RememberContext';

toast.configure()

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {setCurrentUser} = useContext(UserContext)
  const {setRemember} = useContext(RememberContext)
  const history = useHistory()

  const Error=()=>{
    return toast.error('Couple identifiant / mot de passe invalide')
  }

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
        Error()
      }
  }

  return (
    <div className='login-form'>
    <h4>Connexion</h4>
    <Form onSubmit={()=>handleSubmit()}>
      <Form.Field>
        <Input
          className='login-input'
          placeholder='Email'
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />            
      </Form.Field>
      <Form.Field>
        <Input
          className='login-input'
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
    <Link onClick={()=>setRemember(false)}>Mot de passe oublié ?</Link>
</div>
  )
}

export default LoginForm