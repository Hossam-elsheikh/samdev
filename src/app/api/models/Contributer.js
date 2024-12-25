import mongoose from "mongoose";

const ContributerSchema = mongoose.Schema({
  name: {
    type: String,
  },
  pic: {
    type: String,
  },
  linkedin: {
    type: String,
  },
  gitHub: {
    type: String
  },
});

export default mongoose.model.Contributer ||
  mongoose.model("Contributer", ContributerSchema);
