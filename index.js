/* global SERVER, CLIENT_ID, CLIENT_SECRET, REDIRECT_URI */
import SubX from 'subx'
import { Component } from 'react-subx'
import React from 'react'
import ReactDOM from 'react-dom'
import RingCentral from 'ringcentral'
import Cookies from 'js-cookie'
import * as R from 'ramda'

const store = SubX.create({
  extensions: Cookies.getJSON('extensions') || {}
})

const rc = new RingCentral({
  server: SERVER,
  appKey: CLIENT_ID,
  appSecret: CLIENT_SECRET
})
const platform = rc.platform()
const urlParams = new URLSearchParams(window.location.search)
const code = urlParams.get('code')
if (code && code.length > 0) {
  platform.login({
    code,
    redirectUri: REDIRECT_URI
  }).then(() => {
    const authData = platform._auth.data()
    store.extensions[authData.owner_id] = authData
  })
}

SubX.autoRun(store.extensions, () => {
  Cookies.set('extensions', store.extensions, { expires: 3650 })
})

class App extends Component {
  render () {
    const { extensions } = this.props.store
    if (R.keys(extensions).length === 0) {
      return <div>
        Please <a href={platform.loginUrl({
          brandId: '',
          redirectUri: REDIRECT_URI
        })}>login</a>.
      </div>
    } else {
      return <div>
        Logged in.
      </div>
    }
  }
}

ReactDOM.render(<App store={store} />, document.getElementById('root'))
