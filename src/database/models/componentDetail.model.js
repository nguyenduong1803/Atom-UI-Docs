import mongoose, { Schema } from "mongoose";
import mongooseAutoPopulate from "mongoose-autopopulate";

const ComponentDetailSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    component_id: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "component",
      autopopulate: { select: "_id name" },
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
ComponentDetailSchema.plugin(mongooseAutoPopulate);
export default mongoose.model("componentDetail", ComponentDetailSchema);
