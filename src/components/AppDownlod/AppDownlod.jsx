// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./AppDownlod.css"
import { assets } from '../../assets/assets'

function AppDownlod() {
  return (
    <div className="app-downlod" id="app-downloded">
     <p>For batter Experiance Downlod <br/> Tamota </p>
     <div className="app-downlod-platform">
      <img src={assets.play_store} alt="" />
      <img src={assets.app_store} alt="" />
     </div>
    </div>
  )
}

export default AppDownlod
