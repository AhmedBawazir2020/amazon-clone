export const initialState = {
    basket: [],
    user: null
  };

  //Selecter
  export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount,0);
   
  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "ADD_TO_BASKET":
        return {
          ...state,
          basket: [...state.basket, action.item],
        };

        case "EMPTY_BASKET":
        return {
          ...state,
          basket: [],
        };

      case"REMOVE_FROM_BASKET":
       const indxe= state.basket.findIndex( (basketItem)=> basketItem.id === action.id);
       let newBasket = [...state.basket];
       if(indxe >= 0){
         newBasket.splice(indxe, 1);
       }else{
         console.warn (
           `Cant remove product (id:${action.id}) sa its not in basket!`
         )
       }
       return{
         ...state,
         basket: newBasket
       }

       case "SET_USER":
       return {
      ...state,
      user: action.user

       }

      default:
        return state;
    }
  };
  
  export default reducer;
  