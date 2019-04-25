import React from 'react'
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/react'

const FirstPage = ({ history }) => {
  const navigate = () => {
    history.push('/page/second')
  }

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>First Page</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent padding>
        <div>
          <p>First Page</p>
        </div>
        <IonButton onClick={navigate}>Go To Page</IonButton>
      </IonContent>
    </>
  )
}

export default FirstPage
