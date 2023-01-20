import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

 export const getImdbData = createAsyncThunk(
    'imdb/getImdbData',
    async()=>{
             const {data} = await axios.get("https://imdb8.p.rapidapi.com/title/v2/find", {
                params: {title: 'game of', limit: '20', sortArg: 'moviemeter,asc'},
               headers: {
                         'X-RapidAPI-Key': '57993c4867mshf21409484f60a47p1bcf38jsn3d569f443d9c',
                         'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
                        }
             })
             return data;
        });
   
const initialState = {
    imdbData:[],
    status:'idle',
    imdbSearch:{},
} 

 const AsyncImdbSlice = createSlice({
    name:'imdb',
    initialState,
    extraReducers(builder){
        builder.addCase(getImdbData.pending, (state, action)=>{
             state.status = 'pending'
        }).addCase(getImdbData.fulfilled, (state, action)=>{
            state.status = 'success'
           state.imdbData.push(action.payload)
        }).addCase(getImdbData.rejected, (state, action)=>{
            state.status = 'failed'
            state.error = action.error.message
        })
    } 
});
 export const { getSingleMovie} = AsyncImdbSlice.actions;
  export default AsyncImdbSlice.reducer;