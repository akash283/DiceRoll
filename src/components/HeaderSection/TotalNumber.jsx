import React from 'react'
import {useSelector} from 'react-redux'
import styled from 'styled-components'
import { device } from '../device'

function TotalNumber() {
    const {score}=useSelector((state)=>state.dice)
  return (
    <ScoreContainer>
        <h1>{score}</h1>
        <p>Total Score</p>
    </ScoreContainer>
  )
}

export default TotalNumber

const ScoreContainer=styled.div`
    text-align: center;

    @media ${device.mobileL}{
        position: absolute;
        top: 1.1rem;
    }
    h1{
        font-size: 50px;
        @media ${device.tablet}{font-size:2rem}
    }
    p{
        font-size: 24px;
        font-weight: 500px;
        @media ${device.tablet}{font-size:1rem;}
    }
`