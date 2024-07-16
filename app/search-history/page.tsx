import React from 'react'
import SearchHistoryView from '../components/search-history/SearchHistoryView'
import { authenticateClient } from '../lib/auth'

const page = async () => {

    await authenticateClient();
  return (
    <SearchHistoryView />
  )
}

export default page