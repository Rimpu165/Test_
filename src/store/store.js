import { configureStore } from "@reduxjs/toolkit";
import cartreducer from "../slice/cartslice"

 export const store=configureStore({
reducer:{
    cart:cartreducer
}
 })