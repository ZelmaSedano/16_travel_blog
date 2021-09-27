import express from "express";

import * as db from "./db.mjs";

const postRouter = express.Router();

postRouter.get("/1", async (request, response) => {
  const posts = await db.getPost1();
  response.json(posts);
});

postRouter.get("/2", async (request, response) => {
  const posts = await db.getPost2();
  response.json(posts);
});

postRouter.get("/3", async (request, response) => {
  const posts = await db.getPost3();
  response.json(posts);
});
postRouter.post("/", async (request, response) => {
  const post = await db.addPost(request.body.name);
  response.status(201).json(post);
});

// postRouter.get("/", async (request, response) => {
//   const post = await db.getPostTwo();
//   response.json(post);
// });

// postRouter.get("/", async (request, response) => {
//   const post = await db.getPostThree();
//   response.json(post);
// });
// postRouter.use(express.json());

export default postRouter;
