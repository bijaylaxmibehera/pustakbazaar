import axios from "axios";

export const getProducts=async (setLoader,dispatch)=>{
    setLoader(true);
    try{
        const {data:{products}} = await axios.get("/api/products");
        setLoader(false);
        dispatch({type:"SET_PRODUCTS",payload:products});
    }catch(error){
        console.error(error);
    }
}