import React, { useState } from 'react'
import { LocationContext } from '../context'

export const LocationProvider = ({ children }) => {
  const [selectedLocation, setSelectedLocation] = useState({
    location: "",
    latitude: 0,
    longitude: 0,
  })

  return (
    <LocationContext.Provider value={{selectedLocation, setSelectedLocation}}>
      {children}
    </LocationContext.Provider>
  )
}
