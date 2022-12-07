const express = require("express");
const router = express.Router();
const profilesCtrl = require("../../controllers/api/profiles");

router.post("/:id", profilesCtrl.create);
router.get
module.exports = router;
