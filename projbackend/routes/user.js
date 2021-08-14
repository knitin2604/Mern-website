const express = require("express");
const router = express.Router();

const {getUserById, getUser, updateUser , userPurchaseList} = require("../controllers/user");
const {isSignedIn, isAuthenticated, isAdmin} = require("../controllers/auth");

router.param("userId", getUserById );  //method to populate request user to object user such as req.profile

router.get("/user/:userId",isSignedIn, isAuthenticated, getUser);
router.put("/user/:userld",isSignedIn, isAuthenticated , updateUser);
router.get("/user/:userld",isSignedIn, isAuthenticated , userPurchaseList);


module.exports = router; 
