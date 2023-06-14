import mongoose, { Schema } from "mongoose";
import mongooseAutoPopulate from "mongoose-autopopulate";

const QuestionSchema = new Schema(
  {
    user_id:{
        type: mongoose.Types.ObjectId,
        ref: 'users',
        autopopulate: { select: '_id avatar fullname' },
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
QuestionSchema.plugin(mongooseAutoPopulate);

export default mongoose.model("question", QuestionSchema);
