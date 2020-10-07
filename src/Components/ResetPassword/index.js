import React from 'react';
import {Button, Input, Form, Image, Grid} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import Foodtime from '../../assets/img/foodtime-mockup.jpg'

function ResetPassword() {
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
            <Input placeholder='Email' type='email' />
          </Form.Field>
          <Form.Field>
            <Button type='submit' primary>Ré-initialiser</Button>
          </Form.Field>
        </Form>
        <hr />
        <Link to='/'>Vous l'avez retrouvé ? connecté vous</Link>
      </div>
    </Grid.Column>
  </Grid>


  )
}

export default ResetPassword