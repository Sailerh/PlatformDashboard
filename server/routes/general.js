
// import express from "express";
// import { getUser } from "../controllers/general.js";

// const router = express.Router();

// router.get("/user/:id", getUser);

// export default router;



import express from "express";
import { getUser, getDashboardStats } from "../controllers/general.js";

const router = express.Router();

router.get("/user/:id", getUser);
router.get("/dashboard", getDashboardStats);

export default router;
