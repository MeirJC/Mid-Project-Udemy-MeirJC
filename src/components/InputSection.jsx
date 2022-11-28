import axios from "axios";
import React from "react";
import { useFetch } from "../useFetch";
// ==========================================================================

// Client Id

// EXSdV7HYilSjUd5jVkpuJ0Lkd1ZGM9dBnap8KE0M

// Client Secret

// zl9rPjyXfjcuaFvtcKUq4KMWHffmU0pPKEJNV1APuhV3L9kIdVzqJNGIurkLXTnfz4L8ezAysH85SOi422XHY4VJDqhXF2F2PPFW61LlpJ9ajLhemGxBuK3f0LLTAgsj

// Sending an Authenticated Request

// Udemy Affiliate API requires basic authentication parameters to validate the client.
// The auth parameters have to be sent in every call or you will get a 401 UNAUTHORIZED error.
// To send authenticated requests, provide the client_id and client_secret values as a base64 encoded HTTP Authorization header.
// curl --user {YOUR_CLIENT_ID}:{YOUR_CLIENT_SECRET} https://www.udemy.com/api-2.0/courses/
// curl -H "Authorization: Basic {BASE64_ENCODED(CLIENT_ID:CLIENT_SECRET)}" https://www.udemy.com/api-2.0/courses/

// ===========================================================================
function InputSection() {
  function FetchRandom() {
    const { address } = useFetch("https://dog.ceo/api/breeds/image/random");
    return (
      <div>
        <h3>FetchRandom</h3>
        <div>
          <button
            onClick={async () => {
              const url =
                "https://intense-mesa-62220.herokuapp.com/https://www.udemy.com/api-2.0/courses/?search=java";
              const userPass =
                "EXSdV7HYilSjUd5jVkpuJ0Lkd1ZGM9dBnap8KE0M:zl9rPjyXfjcuaFvtcKUq4KMWHffmU0pPKEJNV1APuhV3L9kIdVzqJNGIurkLXTnfz4L8ezAysH85SOi422XHY4VJDqhXF2F2PPFW61LlpJ9ajLhemGxBuK3f0LLTAgsj";
              const { data } = await axios.get(url, {
                // headers: { Authorization: `Basic ` + userPass },
                auth: {
                  username: "EXSdV7HYilSjUd5jVkpuJ0Lkd1ZGM9dBnap8KE0M",
                  password:
                    "zl9rPjyXfjcuaFvtcKUq4KMWHffmU0pPKEJNV1APuhV3L9kIdVzqJNGIurkLXTnfz4L8ezAysH85SOi422XHY4VJDqhXF2F2PPFW61LlpJ9ajLhemGxBuK3f0LLTAgsj",
                },
              });
              console.dir(data);
            }}
          >
            test fetch
          </button>
          <img src={address.data} alt="" style={{ height: "200px" }} />
          <p>
            Address: <br /> {address.data}
          </p>
        </div>
      </div>
    );
  }
  return (
    <div>
      <h3>InputSection</h3>
      <input type="text" />
      <button>Submit</button>
      <button>Clear All</button>
      <div>{FetchRandom()}</div>
    </div>
  );
}

export default InputSection;
