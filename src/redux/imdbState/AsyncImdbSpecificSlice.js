import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


 export const getImdbSpecificData = createAsyncThunk(
    'imdb/getSpecificImdbData',
    async()=>{
             const {data} = await axios.get(`https://imdb8.p.rapidapi.com/title/get-synopses`, {
               params: {tconst: 'tt0944947'},// tt0944947
               headers: {
                         'X-RapidAPI-Key': '57993c4867mshf21409484f60a47p1bcf38jsn3d569f443d9c',
                         'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
                        }
             })
             return data;
        });
 const initialState = {
            imdbSpecificData:"",
            idTconst:"",
            status:'idle',
            error:{},
        } 
 const AsyncImdbSpecificSlice = createSlice({
    name:'imdb2',
    initialState,
    reducers:{
         getSynopses:(state, action)=>{
            state.idTconst = action.payload;
         }
    },
    extraReducers(builder){
        builder.addCase(getImdbSpecificData.pending, (state, action)=>{
             state.status = 'pending'
        }).addCase(getImdbSpecificData.fulfilled, (state, action)=>{
            state.status = 'success'
           state.imdbSpecificData = action.payload;
        }).addCase(getImdbSpecificData.rejected, (state, action)=>{
            state.status = 'failed'
            state.error = action.error.message
        })
    }

});
export const { getSynopses } = AsyncImdbSpecificSlice.actions
  export default AsyncImdbSpecificSlice.reducer;