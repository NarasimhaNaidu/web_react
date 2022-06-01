import React, { useContext } from "react";
import { CardN } from "./Card";
import { LoremIpsumP } from "./Lorem";

export const CardProfile = () => {
  return (
    <div>
      <div>
        <p>
          By clicking any of the botton cards will take you to <b>Arawinz</b>{" "}
          Website
        </p>
        <CardN
          data={[
            {
              image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
              name: "Name 1",
              mobile: 9000000001,
              address: "Address 1",
            },
            {
              image: "https://picsum.photos/200/300",
              name: "Name 2",
              mobile: 9000000002,
              address: "Address 2",
            },
            {
              image: "https://picsum.photos/200/300",
              name: "Name 3",
              mobile: 9000000003,
              address: "Address 3",
            },
            {
              image: "https://picsum.photos/200/300",
              name: "Name 4",
              mobile: 9000000004,
              address: "Address 4",
            },
            {
              image: "https://picsum.photos/200/300",
              name: "Name 5",
              mobile: 9000000005,
              address: "Address 5",
            },
          ]}
        />
      </div>
    </div>
  );
};
