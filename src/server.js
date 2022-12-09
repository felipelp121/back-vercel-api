const express = require("express");
const cors = require("cors");
const { router } = require("./config/router");

const app = express();
app.use(express.json());
app.use(cors({
  origin: "*",
}));
app.use(router);
// app.get('/',(req,res) => {
//   res.send('GeeksforGeeks');
// });
app.listen("4000", () => {
  console.log("server running on port 4000");
});