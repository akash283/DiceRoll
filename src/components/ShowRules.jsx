import React from 'react'
import styled from 'styled-components'
import { device } from './device'

const Rules = () => {
  return (
    <RulesContainer>
        <h2>How to play dice game</h2>
        <div className='text'>
        <p>
            after click on dice if selected number is 
            equal to dice number you will get smae point as dice{" "}
        </p>
        <p>If you get wrong guess then 2 point will be deducted</p>
        </div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer=styled.div`
    max-width: 800px;
    margin: 0 auto;
    background-color: #fbf1f1;
    padding:20px;
    margin-top: 40px;
    border-radius: 10px;
    
    h2{
        font-size: 1.5rem;
        font-weight: bolds;
    }
    .text{
        margin-top: 1rem;
    }
    p{
        font-size: 1rem;
    }
`