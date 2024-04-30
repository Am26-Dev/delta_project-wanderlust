const express = require("express");
const router = express.Router({ mergeParams : true});
const wrapAsync = require("../utils/wrapAsync.js");
// const ExpressError = require("../utils/ExpressError.js");
// const Review = require("../models/review.js");
// const Listing = require("../models/listing.js");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware.js")

const reviewController = require("../controllers/reviews.js")

//REVIEWS
//POST ROUTE
router.post(
    "/",
    isLoggedIn,
    validateReview, wrapAsync(reviewController.createReview));


//REVIEW DELETE ROUTE
router.delete(
    "/:reviewId", 
    isReviewAuthor,
    isLoggedIn,
    wrapAsync(reviewController.deleteReview));


module.exports = router;
