import React from "react";
import { useFetch } from "../useFetch";
function FetchRandom() {
  const { address } = useFetch("https://dog.ceo/api/breeds/image/random");
  return (
    <div>
      FetchRandom
      <div>
        <img src={address.data} alt="" style={{ height: "200px" }} />
        <p>
          Address: <br /> {address.data}
        </p>
      </div>
    </div>
  );
}

export default FetchRandom;
