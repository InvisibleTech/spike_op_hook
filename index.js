const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

//app.use(express.static('public'));
app.use(express.json());

app.post("/dump_req_allow", (req, res) => {
  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>> dump req");
  console.log(req.body);
  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>> dump req");

  res.end(); // Empty SUCCESS
});

const listener = app.listen(process.env.PORT || 0, () => {
  console.log(`KOP Hook is listening on port ${listener.address().port}`);
});
