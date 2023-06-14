import mongoose, { Schema } from "mongoose";

const ComponentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
      unique: true,
    },
    props: [
      {
        name: {
          type: String,
        },
        type: {
          type: String,
        },
        description: {
          type: String,
        },
        default: {
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

export default mongoose.model("component", ComponentSchema);
