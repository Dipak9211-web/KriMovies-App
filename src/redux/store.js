import { configureStore } from '@reduxjs/toolkit'
import asyncImdbReducers from '../redux/imdbState/AsyncImdbSlice'
import asyncImdbSpecificReducer from './imdbState/AsyncImdbSpecificSlice'

export const store = configureStore({
  reducer: {
    imdb:asyncImdbReducers,
    imdbSynopses:asyncImdbSpecificReducer,
  },
})

