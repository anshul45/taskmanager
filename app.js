const express = require("express");
const app = express();
const tasks = require("./routes/tasks.js");

//middleware
app.use(express.json());

//routes
app.get("/hello", (req, res) => {
  res.send("Task Manager app");
});

app.use("/tasks", tasks);

const port = 3000;

app.listen(port, console.log(`server is listening on port ${port}...`));
