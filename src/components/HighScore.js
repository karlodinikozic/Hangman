import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  basicCalculateScore,
  numOfUniqueLetters,
  smarterCalulateScore,
} from "../functions/gameFunctions";
import Spinner from "./Spinner.js";

import "../style/highscore.css";

import { useHistory } from "react-router";
import { Link } from "react-router-dom";

function HighScore() {
  const gameData = useSelector((state) => state.game.value);
  const userData = useSelector((state) => state.user.value);
  const gameInfo = useSelector((state) => state.gameInfo.value);

  const history = useHistory()

  const [highScore, setHighScore] = useState([]);

  const postGameData = async () => {
    const { startTime, endTime } = gameData;
    const { content, quoteId } = gameInfo.gameInfo;

    console.log(content);

    const postObj = {
      quoteId: quoteId,
      length: content.length,
      uniqueCharacters: numOfUniqueLetters(content),
      userName: userData.name,
      errors: gameData.errors,
      duration: endTime - startTime,
    };

    try {
      await axios.post(
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

  const getHighScore = async () => {
    try {
      const res = await axios.get(
        "https://my-json-server.typicode.com/stanko-ingemark/hang_the_wise_man_frontend_task/highscores"
      );
      const obj = res.data
        .map((el) => {
          el["score"] = basicCalculateScore(el.errors);
          el["smarterScore"] = smarterCalulateScore(
            el.length,
            el.uniqueCharacters,
            el.errors,
            el.duration
          );
          return el;
        })
        .sort((el1, el2) => el2.smarterScore - el1.smarterScore);

      setHighScore(obj);
    } catch (error) {
      console.log(error);
    }
  };

  const sortBasicHandler = () => {
    let arr = Array.from(highScore);
    arr = arr.sort((a, b) => b.score - a.score);
    setHighScore([...arr]);
  };

  const sortSmartHandler = () => {
    let arr = Array.from(highScore);
    arr = arr.sort((a, b) => a.smarterScore - b.smarterScore);

    setHighScore([...arr]);
  };

  const handleBack = ()=>{
    let path = `/`;
    history.push(path) 
 
  }

  useEffect(async () => {
    try {
      // await postGameData();
      // await getHighScore();
    } catch (error) {
      console.log(error)
    }
  
  }, []);

  if (highScore.length == 0) {
    return <Spinner />;
  }


  //TODO CHECKOUT ID 3

  return (
    <div style={
      {
        overflowY: "auto",
        height:"100vh",
    
      }
    }>

      <div className="back"  >
      <button ><Link to="/"> New Game </Link></button>
   
      </div>

      <table className="highscore" >
        <thead>
        <tr>
          <th>#</th>
          <th>id</th>
          <th>quoteId</th>
          <th>Username</th>
          <th>Score</th>
          <th>SmartScore</th>
        </tr>
        </thead>
        <tbody>
        {highScore.map((el, indx) => {
          return (
            <tr key={indx}>
              <td>{indx + 1}.</td>
              <td>{el.id}</td>
              <td>{el.quoteId}</td>
           
              <td> {el.userName}</td>
              <td> {el.score.toFixed(2)}</td>
              <td> {el.smarterScore}</td>
            </tr>
          );
        })}
        </tbody>
      </table>
      <div className="sort">
      <button onClick={sortBasicHandler}>Sort by Simple Score</button>
      <button onClick={sortSmartHandler}>Sort by Smart score</button>
      </div>
    </div>
  );
}

export default HighScore;
