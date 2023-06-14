import mongoose, { Schema } from "mongoose";
import mongooseAutoPopulate from 'mongoose-autopopulate';

const AnswerSchema = new Schema(
  {
    user_id:{
        type: mongoose.Types.ObjectId,
        ref: 'users',
        autopopulate: { select: '_id' },
    },
    answer: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    question_id: {
        type: mongoose.Types.ObjectId,
			ref: 'question',
            autopopulate: { select: '_id title' },
      },
  },
  {
    timestamps: true,
  }
);

AnswerSchema.plugin(mongooseAutoPopulate);

export default mongoose.model("answer", AnswerSchema);
