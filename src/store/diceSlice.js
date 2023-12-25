import {createSlice} from '@reduxjs/toolkit'

const initialState={
    score:0,
    selectedNumber:null,
    diceValue:'',
    showRules:false,
    errorMsg:null,
    isselected:false,
}

const diceSlice=createSlice({
    name:'dice',
    initialState,
    reducers:{
        selecteNumber:(state,action)=>{
            state.selectedNumber=action.payload
            state.errorMsg=null;
        }
        ,
        rollDice:(state)=>{
                state.diceValue = Math.floor(Math.random() * 6) + 1;
            if(state.diceValue===state.selectedNumber){
                state.score+=2
            }else{
                state.score-=2
            }
            state.selectedNumber=null
        },
        resetGame:(state)=>{
            state.selectedNumber=null
            state.diceValue=''
            state.score=0
            state.errorMsg=null
        },
        toggleRules:(state)=>{
            state.showRules=!state.showRules
        },
        errorMessage:(state)=>{
            if(state.selectedNumber===null){
                state.errorMsg='Selected the number before rolling'
            }
        }
    }
})

export const{selecteNumber,rollDice,showRules,errorMessage,resetGame,toggleRules}=diceSlice.actions

export default diceSlice.reducer