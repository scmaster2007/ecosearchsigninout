import React from 'react'
import SearchBarView from '../components/search/SearchBarView'
import { authenticateClient } from '../lib/auth'

const page = async () => {

    await authenticateClient()
  return (
    <SearchBarView />
  )
}

export default page