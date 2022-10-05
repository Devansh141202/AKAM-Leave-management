const bcrypt = require("bcrypt");
// const _ = require("loadash");
// const axios = require("axios");
const otpGenerator = require("otp-generator");
const empModel = require("../models/empModel");
const otpModel = require("../models/otpModel")

// const { Emp } = require("../models/empModel");
// const { Otp } = require("../models/otpModel");

module.exports.login = async (req, res) => {
  try {
    const emp = await empModel.findOne({phone:req.body.phone}) 
    if (!emp) {
      return res
        .status(200)
        .send({ message: "Employee Does Not Exists", success: false });
    }
    if (emp) {
    //   const OTP = otpGenerator.generate(4, {
    //     digits: true,
    //     alphabets: false,
    //     upperCase: false,
    //     specialChars: false,
    //   });
    const OTP = otpGenerator.generate(4, {
        digits:true,
        lowerCaseAlphabets:false,
        upperCaseAlphabets:false,
        specialChars:false
    })
      const number = req.body.phone;
      console.log(OTP);

      const otp = new otpModel({ phone: number, otp: OTP });
      const salt = await bcrypt.genSalt(8);
      otp.otp = await bcrypt.hash(otp.otp, salt);
      const result = await otp.save();
      return res.status(200).send({ message: "OTP sent!" });
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports.verifyOtp = async (req, res) => {};
