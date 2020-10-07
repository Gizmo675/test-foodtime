import React, {useState} from 'react';
import {Button, Input, Form, Image, Grid, Divider} from 'semantic-ui-react'
import {toast} from 'react-toastify'
import {Link} from 'react-router-dom'

// styles
import 'react-toastify/dist/ReactToastify.css';
import './resetPassword.css'

import Foodtime from '../../assets/img/foodtime-mockup.jpg'

toast.configure()

function ResetPassword() {

  const [email, setEmail] = useState('')

  const handleSubmit=()=>{
    if(email !== ''){
      toast.success('Un mail vous a été envoyé afin de re-initialiser votre mot de passe')
    }
  }

  return(
    <Grid textAlign='center' verticalAlign='middle' >
    <Grid.Column width={6}>
      <div id='logo'>
        <Image src={Foodtime} alt='foodtime' />
      </div>
    </Grid.Column>
    <Grid.Column width={6}>
      <div>
        <h4>Mot de passe oublié ?</h4>
        <p>Aucun problème, ce sont des choses qui arrivent. Remplissez votre adresse mail afin de recevoir un lien de ré-initialisation</p>
        <Form>
          <Form.Field>
            <Input
              placeholder='Email'
              type='email'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <Button 
              type='submit'
              primary
              onClick={()=>handleSubmit()}
             >Ré-initialiser</Button>
          </Form.Field>
        </Form>
        <Divider />
        <Link to='/'>Vous l'avez retrouvé ? connecté vous</Link>
      </div>
    </Grid.Column>
  </Grid>
  )
}

export default ResetPassword