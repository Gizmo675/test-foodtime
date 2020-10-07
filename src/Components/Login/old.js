  // <Grid textAlign='center' verticalAlign='middle' className='login'>
  //   <Grid.Column width={6}>
  //     <div id='logo'>
  //       <Image src={Foodtime} alt='foodtime' />
  //     </div>
  //   </Grid.Column>
  //   <Grid.Column width={6} >
  //   <div id='login'>
  //   <h4>Connexion</h4>
  //   <Form onSubmit={()=>handleSubmit()}>
  //     <Form.Field>
  //       <Input
  //         placeholder='Email'
  //         type="email"
  //         required
  //         value={email}
  //         onChange={(e) => setEmail(e.target.value)}
  //       />            
  //     </Form.Field>
  //     <Form.Field>
  //       <Input 
  //         placeholder='Mot de passe' 
  //         type="password"
  //         value={password}
  //         required
  //         onChange={(e) => setPassword(e.target.value)}
  //       />
  //     </Form.Field>
  //     <Form.Field>
  //       <Checkbox label='Rester connecté' />
  //     </Form.Field>
  //     <Button 
  //       type='submit'
  //       primary
  //       onClick={()=>console.log(email, password)}
  //     >Se connecter</Button>
  //   </Form>
  //   <Divider />
  //   <Link to='/forgot-password'>Mot de passe oublié ?</Link>
  // </div>
  //   </Grid.Column>
  // </Grid>