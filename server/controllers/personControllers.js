const Person = require("../models/personModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//@desc Register a new Person(def role: User)
//@params POST /api/person/register
//@access PUBLIC

// exports.register = async (req, res) => {
//   try {
//     const { name, email, address, password } = req.body;
//     console.log(name, email, address, password);
//     const existEmail = await Person.findOne({ email });
//     console.log({ existEmail });
//     if (existEmail !== null)
//       return res.status(400).json({ msg: "Email already exist." });
//     else {
//       const hashedPw = await bcrypt.hash(password, 10);
//       const newUser = await Person.create({
//         name,
//         email,
//         password,
//         address,
//       });
//       const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
//       return res.json({ newUser, token });
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ msg: "something went wrong !" });
//   }
// };

exports.register = async (req, res) => {
  try {
    const { name, email, address, password } = req.body;
    console.log({ Person });
    // console.log(name, email, address, password);

    // Check for null or empty email
    if (!email) {
      return res.status(400).json({ msg: "Email is required." });
    }

    // Check if email already exists (excluding null values)
    const existEmail = await Person.findOne({ email });
    console.log({ existEmail });
    if (existEmail !== null) {
      return res.status(400).json({ msg: "Email already exists." });
    } else {
      const hashedPw = await bcrypt.hash(password, 10);
      const newUser = await Person.create({
        name,
        address,
        email,
        password: hashedPw,
      });
      console.log({ newUser });
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);

      return res.json({ newUser, token });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Something went wrong!" });
  }
};
//@desc person login
//@params POST /api/person/login
//@access PUBLIC

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existUser = await Person.findOne({ email });

    let token;
    if (!existUser)
      return res.status(400).json({ msg: "you should register first." });
    else {
      const checkPw = await bcrypt.compare(password, existUser.password);
      if (!checkPw)
        return res.status(400).json({ msg: "Wrong password , try again." });
      token = jwt.sign({ id: existUser._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
    }
    res.json({ existUser, token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "something went wrong !" });
  }
};

//@desc get person Info
//@params GET /api/person/
//@access PUBLIC

exports.getPersonData = async (req, res) => {
  try {
    const personInfo = await Person.findById(req.personId);
    console.log(personInfo);
    return res.json(personInfo);
   
  } catch (error) {
    return res.status(500).json({ msg: "something went wrong !" });
  }
};
