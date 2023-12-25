import styled from 'styled-components'
import { Button } from '../Button/Button'
import {device} from './device'

function StartGame({toggle}) {
  return (
    <Container>
        <div>
            <img src="/images/dice.png" alt="" />
        </div>
        <div className="content">
          <h1>Dice Game</h1>
          <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  )
}

export default StartGame

const Container=styled.div`
  max-width: 1180px;
  display: flex;
  height: 97vh;
  margin: 0 auto;
  align-items: center;
  @media ${device.tablet}{
    flex-direction: column;
    text-align: center;
  }
  img{
    width: 70%;
    animation-name: roll;
    animation-duration: 1s;
    transition: all ease-in;
    @media ${device.tablet}{width:50%;}
    @media ${device.mobileS}{width:100%}
  }

  @keyframes roll{
      0% { transform:translateX(-100%) rotate(-120deg); }
      50% { transform:translateY(-100%) rotate(-300deg); }
      80% { transform:translateX(0px) rotate(180deg); }
     100% { transform:translateX(0px) rotate(0deg); }  
    }

  .content{
    h1{
      font-size: 96px;
      white-space: nowrap;
      color: #f31919;
      @media ${device.tablet}{font-size:65px}
      @media ${device.mobileS}{font-size:50px}
    }
  }
`