import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { DataObjectOutlined } from "@mui/icons-material";

export const FetchApi = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div>
      {/* {JSON.stringify(data)} */}
      {/* <Stack direction="row" spacing={2}>
        {data.slice(0, 10).map((item) => (
          <Avatar alt="RemySharp" src={item.thumbnailUrl} />
        ))}
      </Stack> */}
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={160}>
        {data.slice(0, 15).map((item) => (
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
