const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
    res.sendFile("templates/User/Profile.html", { root: path.join(__dirname, "../") })
})

router.get("/Wishlist", (req, res) => {
    res.sendFile("templates/User/Wishlist.html", { root: path.join(__dirname, "../") })
})

module.exports = router