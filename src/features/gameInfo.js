import {
    createAsyncThunk,
    createSlice
} from "@reduxjs/toolkit";
import axios from "axios";
import { numOfUniqueLetters } from "../functions/gameFunctions";



const initialStateValue = {
    gameInfo: {},
    errors: '',
    loading: 'idle'
}


export const fetchGameInfo = createAsyncThunk(
    "gameInfo/fetchGameInfo", async (_, thunkAPI) => {
        try {
            //const response = await fetch(`url`); //where you want to fetch data
            //Your Axios code part.
            const response = await axios.get(`http://api.quotable.io/random`); //where you want to fetch data
            const {_id,content,length} = response.data
            

  
            const gameInfo = {
                quoteId:_id,
                content: content,
                length:length,
                uniqueCharacters: numOfUniqueLetters(content), 
                duration:0
            }
           

            return await gameInfo;
        } catch (error) {
            return thunkAPI.rejectWithValue({
                error: error.message
            });
        }
    });







export const gameInfoSlice = createSlice({
    name: "gameInfo",
    initialState: {
        value: initialStateValue
    },
    reducers: {
        setDuration: (state, action) => {
            state.value.duration = action.payload
        },
        addError: (state, action) => {
            state.value.errors = state.value.errors + 1
        }

    },
    extraReducers: (builder) => {
        builder.addCase(fetchGameInfo.pending, (state) => {
            state.value.gameInfo = {};
            state.value.loading = "loading";
        });
        builder.addCase(
            fetchGameInfo.fulfilled, (state, { payload }) => {
         
              state.value.gameInfo = payload;
              state.value.loading = "loaded";
        });
        builder.addCase(
            fetchGameInfo.rejected,(state, action) => {
                state.value.loading = "error";
              state.value.error = action.error.message;
     });}
});

export const {
    login
} = gameInfoSlice.actions;

export default gameInfoSlice.reducer;