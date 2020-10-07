import React, { useContext } from 'react';
import {Image, Divider, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import './login.css'

import Foodtime from '../../assets/img/foodtime-mockup.jpg'
import UserContext from '../../Context/UserContext'

function LoggedIn() {

  const {currentUser} = useContext(UserContext)

  return(
    <div className="login">
      <Image src={Foodtime} alt='foodtime' />
      <div className='login-welcome'>
        <Icon name='smile outline' size='large' />
        <h4>Bonjour {currentUser.login} </h4>
        <h5>Vous etes connecté</h5>
        <Divider />
        <Link to='/'>Se deconnecter</Link>
      </div>
    </div>
  )
}
export default LoggedIn