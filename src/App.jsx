/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
import React, { useState, useEffect, createContext } from 'react'
import { registerRootComponent } from 'expo'
import { getDataObject } from '@services/AsyncStorage'
import { Routes } from './Routes'

export const UserDataContext = createContext()

const App = () => {
  const [userData, setUserData] = useState({})
  const [initialRoute, setInitialRoute] = useState('')
  const [contextValue, setContextValue] = useState()

  useEffect(() => {
    ;(async () => {
      try {
        const data = await getDataObject('userData')
        if (data) {
          setInitialRoute('Home')
          setUserData(data)
        } else {
          setInitialRoute('FirstScreen')
          setContextValue([userData, setUserData])
        }
      } catch (err) {
        console.error(err)
      }
    })()
  }, [])

  useEffect(() => setContextValue(userData), [userData])

  return (
    <UserDataContext.Provider value={contextValue}>
      <Routes initialRoute={initialRoute} />
    </UserDataContext.Provider>
  )
}

export default registerRootComponent(App)
