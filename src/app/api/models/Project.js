import mongoose from "mongoose";
import Skill from "./Skill";

const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    type: {
      type: String,
    },
    date: {
      type: Date,
    },
    description: {
      type: String,
    },
    role: {
      type: String,
    },
    gitLink: {
      type: String,
    },
    features: {
      type: [String],
    },
    livePreview: {
      type: String,
    },
    icon: {
      type: String,
    },
    specs: {
      type: [String],
    },
    tools: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: Skill,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema);
