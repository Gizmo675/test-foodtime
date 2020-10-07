import React, { useContext } from 'react';
import { Image} from 'semantic-ui-react'

import Foodtime from '../../assets/img/foodtime-mockup.jpg'
import RememberContext from '../../Context/RememberContext';
import ResetPassword from '../ResetPassword';
import './login.css'
import LoginForm from './LoginForm';

function Login() {

  const {remember} = useContext(RememberContext)

return (
  <div className='login'>
      <Image src={Foodtime} alt='foodtime' />
      {remember ?
      <LoginForm />
      :
      <ResetPassword />
      }
  </div>

)

} 

export default Login