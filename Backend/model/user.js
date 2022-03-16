import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

// how our document look like
const departmentSchema = mongoose.Schema({
    department: String,
    directorName: String,
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
departmentSchema.plugin(autoIncrement.plugin, 'department');
// we need to turn it into a model
const postDepartment = mongoose.model('department', departmentSchema);

export default postDepartment;