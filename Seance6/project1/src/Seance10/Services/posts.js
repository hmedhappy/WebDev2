export const getPosts = () => {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:1999/posts").then((response) => {
      resolve(response.json());
    });
  });
};
