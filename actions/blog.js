import { API } from "../config";

//create blog
export const createBlog = (blog, token) => {
  return fetch(`${API}/create-blog`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: blog,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
