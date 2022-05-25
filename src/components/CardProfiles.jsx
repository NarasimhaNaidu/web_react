import React, { useContext } from "react";
import { CardN } from "./Card";
import { LoremIpsumP } from "./Lorem";
import { UserContext } from "./usercontext";

export const CardProfile = () => {
  const { userprofile, setUserProfile } = useContext(UserContext);

  return (
    <div>
      {userprofile ? (
        <div>
          <p>
            By clicking any of the botton cards will take you to <b>Arawinz</b>{" "}
            Website
          </p>
          <CardN
            data={[
              { name: "Name 1", mobile: 9000000001, address: "Address 1" },
              { name: "Name 2", mobile: 9000000002, address: "Address 2" },
              { name: "Name 3", mobile: 9000000003, address: "Address 3" },
              { name: "Name 4", mobile: 9000000004, address: "Address 4" },
              { name: "Name 5", mobile: 9000000005, address: "Address 5" },
            ]}
          />
        </div>
      ) : (
        <div>
          <p>No User Logged in</p>
          <LoremIpsumP />

        </div>
      )}
    </div>
  );
};
