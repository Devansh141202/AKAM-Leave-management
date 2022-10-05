// const express = require("express");
// const router = express.Router();
// const Emp = require("../models/empModel");
// const Otp = require("../models/otpModel");

// // router.post("/register", async (req, res) => {
// //   try {
// //     const password = req.body.password;
// //     const salt = await bcrypt.genSalt(10);
// //     const hashPassword = await bcrypt.hash(password, salt);
// //     req.body.password = hashPassword;

// //     const emp = Emp.findOne(req.body.phone);
// //     if (emp)
// //       return res.send({ message: "Employee already exists", success: false });

// //     const newemp = new Emp(req.body);
// //     await newemp.save();
// //     res
// //       .status(200)
// //       .send({ message: "User created successfully", success: true });
// //   } catch (error) {
// //     console.log(error);
// //   }
// // });
// router.post("/login", async (req, res) => {
//   try {
//     const emp = await Emp.findOne({ phone: req.body.phone });
//     if (!emp)
//       return res
//         .status(200)
//         .send({ message: "Employee Does Not Exists", success: false });

//     if (emp) {
//       const OTP = otpGenerator.generate(4, {
//         digits: true,
//         alphabets: false,
//         upperCase: false,
//         specialChars: false,
//       });
//       const number = req.body.phone;
//       console.log(OTP);

//       const otp = new Otp({ phone: number, otp: OTP });
//       const result = await otp.save();
//       return res.status(200).send({ message: "OTP sent!" });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });

// module.exports = router;
const router = require("express").Router();
const { login } = require("../controller/empController");

router.route("/login").post(login);
// router.route("verifyOtp").post(verifyOtp);
module.exports = router;
