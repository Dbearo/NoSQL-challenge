const router = require('express').Router();


router
.route(`/`)
.get(getAllU)
.post(createU);

router
.route(`/:id`)
.get(getUById)
.put(updateU)
.delete(deleteU);

router
.route(`/:userId/friends/:friendId`)
.post(addToFriends)
.delete(removeFromFriends);