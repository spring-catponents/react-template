import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from 'react-hot-loader/root'
import RouterViewer from '@/routes'
import './App.styl'
import './App.css'

const App = () => {
  return (
    <div className="app">
      this is react-simple webpack template
      <RouterViewer />
    </div>
  )
}

export default hot(App)
