import { createSlice } from "@reduxjs/toolkit";
const intitialstate={
    cartitem:[]
}

const cartslice=createSlice({
    name:"cart",
    intitialstate,
    reducers:{
        addtocart:(state,action)=>{
            const existitem=state.cartitem.find((item)=>item.id===action.payload.id)
            if(existitem){
                existitem.quantity+=1
            }
            else{
                state.cartitem.push({
                    ...action.payload,
                    quantity:1
                })
            }
        },
        removetocart:(state,action)=>{
            state.cartitem=state.cartitem.filter((item)=>item.id !== action.payload)
        },
        clearcart:(state)=>{
            state.cartitem=[]
        }
    }

})

const {addtocart,removetocart,clearcart}=cartslice.actions;
export default cartslice.reducer;



