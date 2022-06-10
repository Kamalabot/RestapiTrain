import mongoose from 'mongoose'

const dataSchema = new mongoose.Schema({
    Questions:{
        type: String
    },
    Answers :{
        type: String
    },
    Answers_formed:{
        type: String
    },
    Questions_formed:{
        type: String
    }
})

export const ToMongo = mongoose.model('to_mongo',dataSchema);
