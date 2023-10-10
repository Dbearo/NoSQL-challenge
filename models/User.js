const { Schema, model } = require('mongoose');


// Schema to create Post model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unqiue: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unqiue: true,
      required: 'Email address is required',
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    ]
  },
  {
    toJSON:{
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    
  }
);

// Create a virtual property `tagCount` that gets the amount of comments per user
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
  });

// Initialize our Post model
const User = model('user', userSchema);

module.exports = User;