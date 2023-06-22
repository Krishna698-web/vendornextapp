import { useState } from "react";

const useHttp = () => {
  // const [responseData, setResponseData] = useState();

  const fetchData = async (httpRequest, getData) => {
    try {
      const response = await fetch(httpRequest.url, {
        method: httpRequest.method ? httpRequest.method : "GET",
        headers: httpRequest.headers ? httpRequest.headers : {},
        body: httpRequest.body ? JSON.stringify(httpRequest.body) : null,
      });
      const data = await response.json();
      getData(data);
      return data;
    } catch (error) {
      console.log(error.message);
      throw new Error();
    }
  };

  return { fetchData };
};

export default useHttp;
