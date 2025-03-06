import mongoose from "mongoose"

export const userSchema = mongoose.Schema({
    firstname:{
       type:String,
       required:true,
       trim:true,
      
    },
    lastname:{
            type:String,
            required:true,
            trim:true,
           
    },
    username:{
            type:String,
            required:true,
            trim:true,
            unique:true,
            lowercase:true,
            index: true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true 
     },
     password:{
        type:String,
        required:true,
        trim:true,
     },
     phone:{
        type:String,
        required:true
     }
});

 const user = mongoose.model("user",userSchema);
 export default user; 