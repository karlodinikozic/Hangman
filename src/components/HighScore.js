import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { basicCalculateScore, isALetter, numOfUniqueLetters, smarterCalulateScore } from "../functions/gameFunctions";

function HighScore() {
  const gameData = useSelector((state) => state.game.value);
  const userData = useSelector((state) => state.user.value);
  const gameInfo = useSelector((state) => state.gameInfo.value);


  const [highScore,setHighScore] = useState([])

  const postGameData = async () => {
    
    const { startTime, endTime } = gameData;
    const { content, quoteId } = gameInfo.gameInfo;

    console.log(content)

    const postObj = {
      quoteId: quoteId,
      length: content.length,
      uniqueCharacters: numOfUniqueLetters(content), //TODO CHECK THIS
      userName: userData.name,
      errors: gameData.errors,
      duration: endTime - startTime,
    };
    console.log(postObj)

    try {
        const res = await axios.post(
            "https://my-json-server.typicode.com/stanko-ingemark/hang_the_wise_man_frontend_task/highscores",
            {
              headers: {
                "Content-Type": "application/json",
              },
              postObj,
            }
          );
 
    } catch (error) {
      console.log(error);
  
    }
 
  };

  const getHighScore = async () =>{
    
      try {
        const res =  await axios.get('https://my-json-server.typicode.com/stanko-ingemark/hang_the_wise_man_frontend_task/highscores')
        const obj = res.data.map(el=>{
          el["score"] = basicCalculateScore(el.errors);
          el["smarterScore"] = smarterCalulateScore(el.length,el.uniqueCharacters,el.errors,el.duration)
          return el;
        }).sort((el1,el2)=>el2.smarterScore - el1.smarterScore )

        setHighScore(obj)

      } catch (error) {
          console.log(error)
      }
   
  }


  const sortBasicHandler=()=>{
    let arr = Array.from(highScore)
    arr  = arr.sort((a,b)=> b.score - a.score)
    setHighScore([...arr])
  }
  
  const sortSmartHandler=()=>{
    let arr = Array.from(highScore)
    arr  = arr.sort((a,b)=> b.smarterScore - a.smarterScore)

    setHighScore([...arr])
  }
  



  useEffect(async() => {
    await postGameData();
    await getHighScore()
  }, [])


  return <div>
      {highScore.map((el,indx)=>{
          return <div key={indx}>
            <h3>{indx+1}.</h3>
            <h3>Username: {el.userName}</h3>
            <h4>Score: {el.score.toFixed(2)}</h4>
            <h4>SmartScore: {el.smarterScore}</h4>
            <br/>
            </div>
      })}

      <button onClick={sortBasicHandler}>Sort by Simple Score</button>
      <button onClick={sortSmartHandler}>Sort by Smart score</button>
  </div>;
}

export default HighScore;
