import React from 'react'
import SignInView from '../components/signin/SigninView'
import { authenticateSignedIn } from '../lib/auth'

const page = async () => {

  await authenticateSignedIn()

  return (
    <SignInView />
  )
}

export default page