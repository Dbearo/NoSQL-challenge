const { User, Thought } = require("../models");

const userController ={
    getAllU(req,res){
        User.find({})
      .populate({
        path: "friends",
        select: "-__v",
      })
      .select("-__v")
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
    },
    createU({body},res){
        User.create(req)
        .then((newData) => res.json(newData))
        .catch((err) => res.json(err));
    },
    updateU({params, body},res){
        User.findByIdAndUpdate({_id: params.id}, body, {new: true, runValidators: true})
        .then(newUserData => {
            if (!newUserData) {
              res.status(404).json({ message: 'User ID not found' });
              return;
            }
            res.json(dbUserData);
          })
          .catch(err => res.json(err));
    },
    deleteU({params},res){
        User.deleteOne({ _id: params.id })
        .then(res.json(`succsessfully deleted`))
        .catch((err) => res.json(err));
    },
    addToFriends({ params }, res) {
        User.findOneAndUpdate(
          { _id: params.userId },
          { $push: { friends: params.friendId } },
          { new: true }
        )
          .then((dbUserData) => {
            if (!dbUserData) {
              res.status(404).json({ message: 'User ID not found' });
              return;
            }
            res.json(dbUserData);
          })
          .catch((err) => res.status(400).json(err));
      },
      removeFromFriends({ params }, res) {
        User.findOneAndDelete(
          { _id: params.userId },
          { $push: { friends: params.friendId } },
          { new: true }
        )
          .then((dbUserData) => {
            if (!dbUserData) {
              res.status(404).json({ message: 'User ID not found' });
              return;
            }
            res.json(`succsessfully deleted`);
          })
          .catch((err) => res.status(400).json(err));
      },
}


module.exports = userController
//   getAllU,
//     createU,
//     getUById,
//     updateU,
//     deleteU,
//     addToFriends,
//     removeFromFriends