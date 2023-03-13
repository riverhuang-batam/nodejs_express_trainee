const express = require("express"),
  cors = require("cors");
(app = express()), (routes = require("./routes"));
app.use(express.json());
app.use(cors());
app.use(routes);
app.listen(8000, () => console.log("server is running at port"));
