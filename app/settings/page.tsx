import React from 'react'
import SettingsView from '../components/settings/SettingsView'
import { authenticateClient } from '../lib/auth'

const page = async () => {

    await authenticateClient();
  return (
    <SettingsView />
  )
}

export default page