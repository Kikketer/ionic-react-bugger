import React from 'react'
import { IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent } from '@ionic/react'
import styled from 'styled-components'

const StyledToolbar = styled(IonToolbar)`
  --background: rebeccapurple;
`

const SecondPage = ({ goBack }) => {
  return (
    <>
      <IonHeader>
        <StyledToolbar>
          <IonButtons slot="start">
            <IonBackButton goBack={goBack} defaultHref={`/page`} />
          </IonButtons>
          <IonTitle>Second Page</IonTitle>
        </StyledToolbar>
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
