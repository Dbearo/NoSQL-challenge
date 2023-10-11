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

// Set up GET one, PUT, and DELETE at /api/thoughts/:id
router
  .route('/:id')
  .get(getTById)
  .put(updateT)
  .delete(deleteT);

// Post at /api/thoughts/:thoughtId/reactions
router
  .route('/:thoughtId/reactions')
  .post(createReaction);

  router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction);

module.exports = router;