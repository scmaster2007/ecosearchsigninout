import React from 'react'
import HeroView from './components/home/HeroView'
import TeamView from './components/home/TeamView'
import WaitlistView from './components/home/WaitlistView'
import WorksView from './components/home/WorksView'

const page = async () => {

  return (
    <div>
      <HeroView />
      <WorksView />
      <WaitlistView />
      <TeamView />
    </div>
  )
}

export default page
