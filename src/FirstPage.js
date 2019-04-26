import React from 'react'
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/react'
import styled from 'styled-components'

const StyledToolbar = styled(IonToolbar)`
  --background: orange;
`

const FirstPage = ({ history }) => {
  const navigate = () => {
    history.push('/second')
  }

  return (
    <>
      <IonHeader>
        <StyledToolbar>
          <IonTitle>First Page</IonTitle>
        </StyledToolbar>
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
