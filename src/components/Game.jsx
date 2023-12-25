import styled from 'styled-components'
import TotalNumber from './HeaderSection/TotalNumber'
import NumberSelector from './HeaderSection/NumberSelector'
import RollDice from './Dice/RollDice'
import {Button,OutlineButton}from '../Button/Button'
import ShowRules from './ShowRules'
import { useDispatch,useSelector } from 'react-redux'
import { toggleRules,resetGame } from '../store/diceSlice'
import { device } from './device'

function Game() {
  const dispatch=useDispatch()
  const {showRules}=useSelector((state)=>state.dice)

  const handleReset=()=>{
    dispatch(resetGame())
  }

  const handleToggleRules=()=>{
    dispatch(toggleRules())
  }

  return (
    <MainContainer>
      <div className="top_section">
        <TotalNumber/>
        <NumberSelector/>
      </div>
      <RollDice/>
      <div className="btns">
        <OutlineButton onClick={handleReset}>Reset Game</OutlineButton>
        <Button onClick={handleToggleRules}>Show Rules</Button>
      </div>
      {showRules && <ShowRules/>}
    </MainContainer>
  )
}

export default Game

const MainContainer=styled.main`

    .top_section{
      width: 100%;
      height: 120px;
      display: flex;
      justify-content: space-around;
      align-items: center;

      @media ${device.mobileL}{
        height:285px;
        text-align: center;
      }
    }
    .btns{
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap:10px;
    @media ${device.tablet}{
      flex-direction: column;     
    }
  }
`