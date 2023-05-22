import {useState} from 'react'

import {
  MainContainer,
  LockImg,
  ContentText,
  LockButton,
} from './styledComponents'

const Unlock = () => {
  const [lock, setLock] = useState(true)

  const onClickLock = () => {
    setLock(prevLock => !prevLock)
  }

  return (
    <MainContainer>
      {lock ? (
        <LockImg
          src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
          alt="lock"
        />
      ) : (
        <LockImg
          src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
          alt="unlock"
        />
      )}
      {lock ? (
        <ContentText>Your Device is Locked</ContentText>
      ) : (
        <ContentText>Your Device is Unlocked</ContentText>
      )}
      <LockButton onClick={onClickLock}>{lock ? 'Unlock' : 'Lock'}</LockButton>
    </MainContainer>
  )
}

export default Unlock
