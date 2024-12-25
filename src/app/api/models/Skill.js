import mongoose from "mongoose";

const SkillsSchema = mongoose.Schema({
    title:{
        type: String
    },
    svg:{
        type: String
    }
})


export default mongoose.models.Skill || mongoose.model('Skill', SkillsSchema);
