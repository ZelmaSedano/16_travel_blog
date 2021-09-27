import express from "express";
import mime from "mime-types";

import * as db from "./db.mjs";
// import taskRouter from "./taskRouter.mjs";
import postRouter from "./postRouter.mjs";
const app = express();

// app.use("/api/tasks", taskRouter);

//use router in server
app.use("/api/posts", postRouter);

postRouter.get("/api/post", async (request, response) => {
  const post = await db.getPostOne();
  response.json(post);
});

postRouter.post("/api/post/1", async (request, response) => {
  const post = await db.addPost1();
  response.json(post);
});

postRouter.post("/api/post/2", async (request, response) => {
  const post = await db.addPost2();
  response.json(post);
});

postRouter.post("/api/post/3", async (request, response) => {
  const post = await db.addPost3();
  response.json(post);
});

// app.use("/api/posts", postRouter);
// postRouter.get("/api/posts", async (request, response) => {
//   const post = await db.getPostTwo();
//   response.json(post);
// });

// app.use("/api/posts", postRouter);
// postRouter.get("/api/posts", async (request, response) => {
//   const post = await db.getPostThree();
//   response.json(post);
// });

// Do not comment out or delete this end point. The React development server
// won't start until it pings this end point successfully.
app.get("/api/ping", (request, response) =>
  response.json({ response: "pong" }),
);

if (process.env?.SERVE_REACT?.toLowerCase() === "true") {
  app.use(
    express.static("/app", {
      maxAge: "1d",
      setHeaders: (res, path) =>
        ["application/json", "text/html"].includes(mime.lookup(path)) &&
        res.setHeader("Cache-Control", "public, max-age=0"),
    }),
  );

  app.get("*", (req, res) => {
    res.sendFile("/app/index.html");
  });
}

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.info(`Example server listening at http://localhost:${port}`);
});
