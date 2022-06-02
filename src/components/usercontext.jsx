import { createContext } from "react";

export const UserContext = createContext(null);

export const SnackbarContext = createContext({});

export const initialState = {
  dine_in: [],
  delivery: [],
  take_away: [],
};

export const DINEIN = "DINEIN";
export const DELIVERY = "DELIVERY";
export const TAKEAWAY = "TAKEAWAY";

export const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case DINEIN:
      return {
        ...state,
        dine_in: action.payload,
      };
    case DELIVERY:
      return {
        ...state,
        delivery: action.payload,
      };
    case TAKEAWAY:
      return {
        ...state,
        take_away: action.payload,
      };
  }
};
