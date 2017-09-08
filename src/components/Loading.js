import React from 'react'
import styled from 'styled-components'

const LoadingBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  transform: translate(-50%, -50%);

  width: 100%;
  height: 100%;

  background-color: rgba(white, 0.6);

  z-index: 100;

  h1 {
    color: black;
  }
`

export default class Loading extends React.PureComponent {
  render() {
    return (
      <LoadingBox>
        <h1>I'M LOADING!...</h1>
      </LoadingBox>
    )
  }
}
