import React, {useState} from 'react';
import {Button, Input, Form, Divider} from 'semantic-ui-react'
import {toast} from 'react-toastify'
import {Link} from 'react-router-dom'

// styles
import 'react-toastify/dist/ReactToastify.css';
import './resetPassword.css'

import { useContext } from 'react';
import RememberContext from '../../Context/RememberContext';

toast.configure()

function ResetPassword() {
  const {setRemember} = useContext(RememberContext)
  const [email, setEmail] = useState('')

  const handleSubmit=()=>{
    if(email !== ''){
      toast.success('Un mail vous a été envoyé afin de re-initialiser votre mot de passe')
    }
  }

  return(
      <div className='login-form'>
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
        <Link to='/' onClick={()=>setRemember(true)}>Vous l'avez retrouvé ? connecté vous</Link>
      </div>
  )
}

export default ResetPassword