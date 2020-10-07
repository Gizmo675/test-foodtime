import React from 'react';
import {Link} from 'react-router-dom'

function NotFound() {
  return(
    <div className="notfound">
      <h1>
        Desolé, la page que vous demandez n'existe pas...
      </h1>
      <Link to='/'>Retour a l'acceuil</Link>
    </div>
  )
}

export default NotFound