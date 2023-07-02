import {createSlice} from "@reduxjs/toolkit"; 
import {categorias} from "../../components/data/categories"


const INITIAL_STATE = {
    categories: categorias 
}


export const categoriesSlice = createSlice({
    name: "categories",
    initialState: INITIAL_STATE,
    reducers:{
        getCategories: (state)  =>{
            return state;
        }
    }
})

export const {getCategories} = categoriesSlice.actions;
export default categoriesSlice.reducer;
