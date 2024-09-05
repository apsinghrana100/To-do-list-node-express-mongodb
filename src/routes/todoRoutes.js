const {
  InsertData,
  DeleteData,
  UpdateData,
  FetchAll,
} = require("../controller/todoSchenaController");

const router = require("express").Router();

router.post("/createPost", InsertData);
router.delete("/deletePost/:id", DeleteData);
router.put("/updateData/:id", UpdateData);
router.get("/fetchAll", FetchAll);

module.exports = router;
