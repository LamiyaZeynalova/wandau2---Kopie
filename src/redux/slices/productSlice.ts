import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IProduct } from "../../Modules/Shop/Models/ShopModel";

export interface ICartProduct extends IProduct {
  quantity: number;
}

export interface IProductSlice {
  cart: ICartProduct[];
  cartCount: number;
  price: number;
  cartOpen: boolean;
}

const savedCart = localStorage.getItem("cart");
const initialState: IProductSlice = {
  cart: savedCart ? JSON.parse(savedCart) : [],
  cartCount: 0,
  price: 0,
  cartOpen: false,
};

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    calculateCartCount: (state) => {
      state.cartCount = state.cart.reduce(
        (acc, curr) => acc + curr.quantity,
        0
      );
    },
    calculateTotalPrice: (state) => {
      state.price = state.cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const existingItem = state.cart.find(
        (item) => item._id === action.payload._id
      );

      const quantityToAdd = action.payload.quantity ?? 1;

      if (existingItem) {
        existingItem.quantity += quantityToAdd;
      } else {
        state.cart.push({
          ...action.payload,
          quantity: quantityToAdd,
        } as ICartProduct);
      }

      productSlice.caseReducers.calculateCartCount(state);
      productSlice.caseReducers.calculateTotalPrice(state);
    },
    removeCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
      productSlice.caseReducers.calculateCartCount(state);
      productSlice.caseReducers.calculateTotalPrice(state);
    },
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const existing = state.cart.find((item) => item._id === action.payload);
      if (existing) {
        existing.quantity++;
      }
      productSlice.caseReducers.calculateCartCount(state);
      productSlice.caseReducers.calculateTotalPrice(state);
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const existing = state.cart.find((item) => item._id === action.payload);
      if (existing && existing.quantity > 1) {
        existing.quantity--;
      } else if (existing && existing.quantity === 1) {
        state.cart = state.cart.filter((item) => item._id !== action.payload);
      }
      productSlice.caseReducers.calculateCartCount(state);
      productSlice.caseReducers.calculateTotalPrice(state);
    },
    toggleCart(state, action: PayloadAction<boolean>) {
      state.cartOpen = action.payload;
    },
    closeCart: (state) => {
      state.cartOpen = false;
    },
    openCart: (state) => {
      state.cartOpen = true;
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  toggleCart,
  closeCart,
  openCart,
  calculateCartCount,
  calculateTotalPrice,
  removeCart,
} = productSlice.actions;

export default productSlice.reducer;
