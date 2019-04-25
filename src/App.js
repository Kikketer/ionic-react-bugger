import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { IonApp, IonPage, IonRouterOutlet } from '@ionic/react'
import '@ionic/core/css/core.css'
import '@ionic/core/css/ionic.bundle.css'

import FirstPage from './FirstPage'
import SecondPage from './SecondPage'

const App = () => {
  return (
    <Router>
      <IonApp className="App">
        <IonPage>
          <IonRouterOutlet>
            <Route path="/" component={FirstPage} exact={true} />
            <Route path="/second" component={SecondPage} exact={true} />
          </IonRouterOutlet>
        </IonPage>
      </IonApp>
    </Router>
  )
}

export default App
