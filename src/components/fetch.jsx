import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import React, { useEffect, useState, useReducer } from "react";

const axios = require("axios");

const initialState = { data: [] };

const reducer = (state, action) => {
  console.log("chetan");
  console.log(state);
  console.log(action);
  switch (action.type) {
    case "FETCH":
      const { data } = action.payload;
      return { ...state, data };

    default:
      return state;
  }
};

export const FetchApi = () => {
  // const [data, setData] = useState([]);

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log(initialState.data,"initialState.data")
    getData();
  }, []);

  const getData = async () => {
    if (state.data.length === 0) {
      const req = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      console.log(req.data);
      dispatch({ type: "FETCH", payload: { data: req.data } });
    }
  };

  return (
    <div>
      {/* {JSON.stringify(state)}   */}
      {/* <Stack direction="row" spacing={2}>
        {data.slice(0, 10).map((item) => (
          <Avatar alt="RemySharp" src={item.thumbnailUrl} />
        ))}
      </Stack> */}

      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={160}>
        {state.data.slice(0, 15).map((item) => (
          <ImageListItem key={item.thumbnailUrl}>
            <img
              src={`${item.thumbnailUrl}`}
              srcSet={`${item.thumbnailUrl}`}
              alt={item.title}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};
