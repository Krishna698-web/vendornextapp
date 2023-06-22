import { useState } from "react";

const useHttp = () => {
  // const [responseData, setResponseData] = useState();

  const sendRequest = async (httpRequest, getData = "") => {
    try {
      const response = await fetch(httpRequest.url, {
        method: httpRequest.method ? httpRequest.method : "GET",
        headers: httpRequest.headers ? httpRequest.headers : {},
        body: httpRequest.body ? JSON.stringify(httpRequest.body) : null,
      });

      const data = await response.json();
      getData(data);
    } catch (error) {
      console.log(error.message);
      throw new Error();
    }
  };

  return { sendRequest };
};

export default useHttp;
