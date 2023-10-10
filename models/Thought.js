const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText:{
            type: String,
            reqired: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
        },
        usrname:{
            type: String,
            required: true
        },
        reactions:[reactionSchema]
    }, 
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody:{
        type: String,
        required: true,
        maxlength: 280,
    },
    username:{
        type: String,
        reqiured: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    }
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
}
);


thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);