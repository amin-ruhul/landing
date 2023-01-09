import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProduct: [],
};

const cartSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setCartProduct: (state, action) => {
      let currentData = action.payload;

      let filterData = state.cartProduct.filter(
        (product) => product.id === currentData.id
      );

      if (filterData.length) {
        let newCartData = state.cartProduct.map((product) => {
          if (product.id === currentData.id) {
            let newQty = product?.quantity + currentData?.quantity;
            if (newQty < product.quantity_available) {
              return {
                ...product,
                quantity: newQty,
              };
            } else {
              return product;
            }
          } else {
            return product;
          }
        });
        state.cartProduct = [...newCartData];
        localStorage.setItem("cartData", JSON.stringify(state.cartProduct));
      } else {
        state.cartProduct = [...state.cartProduct, action?.payload];
        localStorage.setItem("cartData", JSON.stringify(state.cartProduct));
      }

      //   state.cartProduct = [...state.cartProduct,action?.payload]
      console.log(state.cartProduct);
    },

    setLocalStorageData: (state, action) => {
      state.cartProduct = action.payload;
    },
  },
});

export default cartSlice.reducer;
export const { setCartProduct, setLocalStorageData } = cartSlice.actions;
