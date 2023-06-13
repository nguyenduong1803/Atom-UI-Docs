import mongoose, { Schema } from "mongoose";

const ClassList = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    css: [
      {
        key: {
          type: String,
        },
        value: {
          type: String,
        },
      },
    ],
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

export default mongoose.model("classList", ClassList);
