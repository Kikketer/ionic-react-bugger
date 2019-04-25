import React, { useEffect, useRef } from 'react'
import { IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent } from '@ionic/react'

const SecondPage = ({ goBack }) => {
  const instance = useRef({})

  useEffect(() => {
    // Do some sort of load on this page
    console.log('Mounted ', instance.current)
    if (!instance.current.id) {
      instance.current.id = 'Abc'
    }

    // This second page isn't unmounted when back is pressed
    // However the instance ref is cleared so it mounts again
    return () => {
      console.log('Unmounted')
      delete instance.current.id
    }
  }, [])

  return (
    <>
      <IonHeader>
        <IonToolbar>
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
