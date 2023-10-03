import React from 'react'
import "./index.css"
import {Route,Routes} from "react-router-dom"
import { CampaignDetails,CreateCampaign,Home,Profile } from './pages'
import { Navbar,Sidebar } from './components'

function Index() {
  return (
    <div className='relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row'>
      <div className="sm:flex hidden mr-10 relative"><Sidebar/></div>
      <div className="sm:flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5"><Navbar/> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/campaign-details/:id" element={<CampaignDetails />} />
        <Route path="/create-campaign" element={<CreateCampaign />} />
      </Routes>
      </div>
    </div>
  )
}

export default Index