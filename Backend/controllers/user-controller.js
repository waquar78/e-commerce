import user from "../models/user-schema.js";


export const userSignup = async (request, response) => {
  try {
    const { email, username } = request.body;

    // Check if email already exists
    const existingEmail = await user.findOne({ email });
    if (existingEmail) {
      return response.status(400).json({ message: "Email already exists" });
    }

    // Check if username already exists
    const existingUsername = await user.findOne({ username });
    if (existingUsername) {
      return response.status(400).json({ message: "Username already exists" });
    }

    const userData = request.body;
    const newUser = new user(userData);
    await newUser.save();
    response.status(200).json({ message: newUser });
  } catch (error) {
    console.error("Error saving user:", error);
    response.status(500).json({ message: error.message });
  }
};

export const userLogin =async(request,response)=>{
  try {
    const username=request.body.username;
    const password=request.body.password;

    let existinguser=await  user.findOne({username: username, password:password});
    if(existinguser){
      return response.status(200).json({data: existinguser});
    }else{
      return response.status(401).json("invalid login")
    }
  } catch (error) {
    return response.status(500).json('error',error.message);
  }
}
