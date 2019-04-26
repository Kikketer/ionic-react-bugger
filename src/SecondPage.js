import React from 'react'
import { IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent } from '@ionic/react'
import './SecondPage.css'

const SecondPage = ({ goBack }) => {
  return (
    <>
      <IonHeader>
        <IonToolbar className="my-custom-header">
          <IonButtons slot="start">
            <IonBackButton goBack={goBack} defaultHref={`/page`} />
          </IonButtons>
          <IonTitle>Second Page</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent padding>
        <div>
          <p>Second Page</p>
        </div>
      </IonContent>
    </>
  )
}

export default SecondPage
