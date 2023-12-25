import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { rollDice, errorMessage } from "../../store/diceSlice";

function RollDice() {
  const dispatch = useDispatch();
  const { selectedNumber, diceValue } = useSelector((state) => state.dice);

  const handleRollDice = () => {
    if (selectedNumber !== null) {
      dispatch(rollDice());
    } else {
      dispatch(errorMessage());
    }
  };

  const getDiceImage = (value) => {
    return value ? `./images/dice/dice_${value}.png` : "images/dice/dice_1.png";
  };
  return (
    <DiceContainer>
      <div className="dice" onClick={handleRollDice}>
        <img src={getDiceImage(diceValue)} alt="default Image" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
}

export default RollDice;

const DiceContainer = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  /* background-color: red; */

  .dice {
    cursor: pointer;

    img {
      width: 200px;
      animation: flip;
      animation-duration: 1s;
    }

    @keyframes flip {
      0% {
        transform: translateX(-100%) rotate(-120deg);
      }
      50% {
        transform: translateY(-100%) rotate(-300deg);
      }
      80% {
        transform: translateX(0px) rotate(180deg);
      }
      100% {
        transform: translateX(0px) rotate(0deg);
      }
    }
  }

  p {
    font-size: 24px;
  }
`;
