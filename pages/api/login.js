import dbConnect from "../../lib/dbConnect";
import bcrypt from 'bcrypt'
import User from "../../models/User";

export default async (req, res) => {
  const { username, password } = req.body;
  
  await dbConnect();
  try {
    let user = await User.findOne({ username: username });

    // If no username, user doesn't exist
    if (!user) {
      res.status(404).json({ message: "No user found" });
    } else {
      // Compare user-entered password to stored hash
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        // Send all-clear with _id as token
        res.status(200).json({ token: user._id.toString() });
      } else {
        res.status(401).json({ message: "Incorrect password" });
      }
    }
  } catch (error) {
    res.status(400).json({ success: false });
  }

  // Disconnect from database
  // dbConnect.close();
};
