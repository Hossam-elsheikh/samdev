import mongoose from "mongoose";

const DetailsSchema = mongoose.Schema({
  cvLink: {
    type: String,
  },
  socials: {
    type: [
      {
        title: String,
        link: String
        
      },
    ],
  },

  skills: {
    type: [String],
  },
});

export default mongoose.models.Detail ||
  mongoose.model("Detail", DetailsSchema);
