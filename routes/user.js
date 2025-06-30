const express = require("express");
const router = express.Router();
const {
  handleGetAllUsers,
  handlePostUser,
  handleGetUserById,
  handlePatchUserById,
  handleDeleteUserById,
} = require("../controllers/user");

router.get("/", handleGetAllUsers);
router.post("/", handlePostUser);
router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handlePatchUserById)
  .delete(handleDeleteUserById);

module.exports = router;
