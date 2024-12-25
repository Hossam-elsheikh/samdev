import mongoose  from "mongoose";

const CourseSchema = mongoose.Schema({
    title: {
        type : String,
    },
    date: {
        type : Date,
        
    },
    description: {
        type : String
    },
    link : {
        type : String
    },
    organization : {
        type: String
    },
    topics : {
        type  : [String]
    }
})


const Course = mongoose.models.Course || mongoose.model("Course", CourseSchema);

module.exports = Course;