export const getTasks = () => _get("/api/tasks");

export const addTask = (name) => _post("/api/tasks", { name });

export const getPost1 = async () => {
  const response = await fetch("/api/posts/1");
  return response.json();
};

export const getPost2 = async () => {
  const response = await fetch("/api/posts/2");
  return response.json();
};
export const getPost3 = async () => {
  const response = await fetch("/api/posts/3");
  return response.json();
};
// export const addPost = async () => {
//   const response = await fetch("/api/posts");
//   return response.json();
// };
// export const addPost = (post) => {
//   console.log("apiClient", post);
//   return _post("/api/posts", { post });
// };

const _get = async (url) => (await fetch(url)).json();

const _post = async (url, body) => {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  let result;
  try {
    result = await response.json();
  } catch {}

  return result;
};
