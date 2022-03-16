import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

// how our document look like
const teacherSchema = mongoose.Schema({
    name: String,
    username: String,
    email: {
        type: String,
        required: [true, "Please provide email address"],
        unique: true,
        match: [
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          "Please provide a valid email",
        ],
      },
  
});

autoIncrement.initialize(mongoose.connection);
teacherSchema.plugin(autoIncrement.plugin, 'teacher');
// we need to turn it into a model
const postTeacher = mongoose.model('teacher', teacherSchema);

export default postTeacher;