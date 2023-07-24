export const getBreeds = async () => {
  return fetch("https://dogapi.dog/api/v2/breeds")
    .then((response) => response.json())
    .then((result) => {
      //   console.log(result.data);
      return result.data;
    });
};
