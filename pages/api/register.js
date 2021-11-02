import dbConnect from "../../lib/dbConnect";
import User from "../../models/User";

export default async (req, res) => {
  await dbConnect();

  try {
    const user = await User.create(req.body);

    // Send all-clear with _id as token
    res.status(200).json({ token: user.insertedId.toString() });
    res.status(201).json({ success: true, data: user });
  } catch (error) {
    res.status(400).json({ success: false });
  }

  // Disconnect from database
  // dbConnect.close();
};
