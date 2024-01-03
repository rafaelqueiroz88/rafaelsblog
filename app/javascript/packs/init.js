import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../application/state/store'
import  'bootstrap/dist/css/bootstrap.min.css'

import App from '../application/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store} >
      <Router>
        <Route path="/" component={App} />
      </Router>
    </Provider>,
    document.body.appendChild(document.createElement('div')),
  )
})
