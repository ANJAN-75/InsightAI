import mongoose from "mongoose";
import bcrypt from "bcrypt"


const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    Verified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

userSchema.pre("save", async function (next) {
 try{
     if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
 }catch(error){
    next(error)
 }
});

userSchema.methods.comparePassword=function(candidatepassword){
    return bcrypt.compare(candidatepassword,this.password)
}

UserModel=mongoose.modelNamesodel("user",userSchema)


export default UserModel