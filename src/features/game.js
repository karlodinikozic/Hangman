import {createSlice} from '@reduxjs/toolkit'
import { isALetter } from '../functions/gameFunctions';


const createInitMap = (str)=>{
    const mapa = {}
    const arr = str.toLowerCase().split("");
    arr.forEach(element => {
        if(isALetter(element)){
            mapa[element] = false;
        } 
    });

    return mapa;
}

const checkIfDone = (map)=>{
    let bool = true;
    Object.keys(map).forEach(key =>{
        bool = bool && map[key];
    })
    return bool;
}


const initialStateValue = {mapa:{},errors:0,done:false,startTime:0,endTime:0}

export const gameSlice = createSlice({
    name:"game",
    initialState: {value:initialStateValue},
    reducers:{
        changeElement: (state,action)=>{
            if(state.value.mapa[action.payload] == undefined){
                state.value.errors+=1;
            }
            state.value.mapa[action.payload] = true;
            state.value.done = checkIfDone(state.value.mapa)
            if(state.value.done){
                state.value.endTime = Date.now();
            }

        },
        initMap:(state,action)=>{
            state.value.mapa = createInitMap(action.payload);
            state.value.startTime = Date.now();
            state.value.done = false
            state.value.errors = 0
          
        }
   

    }
})

export const {initMap,changeElement} = gameSlice.actions

export default gameSlice.reducer