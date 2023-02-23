"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const idex_controller_1 = require("../controllers/idex.controller");
const router = (0, express_1.Router)();
router.get("/users", idex_controller_1.getUser);
router.get("/users/:id", idex_controller_1.getUserById);
router.post("/users", idex_controller_1.createUser);
// router.put("/users/:id", getUser); 
// router.delete("/users/:id", getUser);
exports.default = router;
