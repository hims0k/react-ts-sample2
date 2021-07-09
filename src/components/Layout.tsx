import React from 'react'
import styled from 'styled-components'
import { Reset } from 'styled-reset'

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Reset>
        <Body>{children}</Body>
      </Reset>
    </>
  )
}

const Body = styled.div`
  height: calc(100vh - 60px);
`
