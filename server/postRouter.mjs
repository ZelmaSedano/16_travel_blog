import express from "express";

import * as db from "./db.mjs";

const postRouter = express.Router();

postRouter.get("/", async (request, response) => {
  const post = await db.getPost1();
  response.json(post);
});

// postRouter.use(express.json());
// postRouter.post("/", async (request, response) => {
//   const task = await db.addTask(request.body.name);
//   response.status(201).json(task);
// });

export default postRouter;
