import styled from 'styled-components'
import { useDispatch,useSelector } from 'react-redux'
import{selecteNumber} from '../../store/diceSlice'
import {device} from '../device'


function NumberSelector() {
    const dispatch=useDispatch()
    const{selectedNumber,errorMsg,isselected}=useSelector((state)=>state.dice)
    const arrNumber=[1,2,3,4,5,6]

    const handleNumberSelected=(number)=>{
        dispatch(selecteNumber(number))
    }

  return (
    <NumberSelectorContainer>
        <div className="flex">
            {arrNumber.map((number)=>(
            <Box 
            style={{
                backgroundColor: number === selectedNumber ? 'red' : 'white',
                color: number === selectedNumber ? 'white' : 'red',
              }}
            key={number}
            onClick={()=>handleNumberSelected(number)}
            >
                 {number}   
            </Box>
            ))}
        </div>
        { errorMsg && <p className='error' style={{ color: 'red' }}>{errorMsg}</p>}
        <p>Selected Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector

const NumberSelectorContainer=styled.div`
    display: flex;
    flex-direction:column;

    .flex{
        position: relative;
        display: flex;
        gap: 24px;
        @media ${device.mobileM}{gap: 15px;}
        @media ${device.mobileS}{gap: 7px;}
    }

    p{
        padding-top:10px;
        font-size:20px;
        font-weight: 700px;
        @media ${device.tablet}{font-size:1rem}
    }

    .error{
    position: absolute;
    top: 8rem;
    right: 30rem;
    color: red;
    @media ${device.tablet}{right:15rem}
    @media ${device.laptop}{right:20rem}
    @media ${device.mobileL}{right:4rem; top:15rem;}
    @media ${device.mobileS}{right: 1rem;}
  }
`

const Box=styled.div`
     height: 60px;
    width: 60px;
    border-radius: 20%;
    border: 1px solid black;
    display: grid;
    list-style: none;
    place-items: center;
    font-size: 20px;
    font-weight: 700;
    @media ${device.tablet}{
      height: 45px;
      width: 45px;
      font-size: 15px;
    }
     
`