const router = require('express').Router();

const {
    getAllU,
    createU,
    getUById,
    updateU,
    deleteU,
    addToFriends,
    removeFromFriends
} = require(`../../controllers/userController`);

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

module.exports = router;