import React, { useContext } from 'react';
import {Image, Grid, Divider} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import Foodtime from '../../assets/img/foodtime-mockup.jpg'
import UserContext from '../../Context/UserContext';

function LoggedIn() {

  const {currentUser} = useContext(UserContext)

  return(
  <Grid textAlign='center' verticalAlign='middle' >
  <Grid.Column width={6}>
    <div id='logo'>
      <Image src={Foodtime} alt='foodtime' />
    </div>
  </Grid.Column>
  <Grid.Column width={6}>
    <div>
      <h4>Bonjour {currentUser.login} </h4>
      <h5>Vous etes connecté</h5>
      <Divider />
      <Link to='/'>Se deconnecter</Link>
    </div>
  </Grid.Column>
</Grid>
  )
}
export default LoggedIn