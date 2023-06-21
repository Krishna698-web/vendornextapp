const useHttp = async () => {
  const response = await fetch(url, {
    method: method,
    headers: headers ? headers : {},
    body: data ? JSON.stringify(data) : {},
  });

  const data = await response.json();

  return { data };
};
