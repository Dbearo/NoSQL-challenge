const router = require('express').Router();

const {
    getAllT,
    createT,
    getTById,
    updateT,
    deleteT,
    createReaction,
    deleteReaction
} = require(`../../controllers/thoughtController`);

router
    .route('/')
    .get(getAllT)
    .post(createT);

router
    .route('/:id')
    .get(getTById)
    .put(updateT)
    .delete(deleteT);

router
    .route('/:thoughtId/reactions')
    .post(createReaction);

router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);

module.exports = router;