const UserModel = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')
require("dotenv").config();

// const JWT_SECRET = '444d2bad95c2d9e69eee91b7d266a8f3ab96359f3ef402a384aa984b7eb5c0c1'

//User logined 
const userDefault = ((req, res) => {
    return res.json({
        email: req.email,
        name: req.name,
        isAdmin: req.isAdmin,
        isBlocked: req.isBlocked
    })
})

//Register user or admin API
const userRegister = ((req, res) => {
    const { name, email, mobile, password, isAdmin, isBlocked } = req.body;
    bcrypt.hash(password, 10)
        .then(hash => {
            UserModel.create({ name, email, mobile, password: hash, isAdmin, isBlocked })
                .then(user => res.json(user))
                .catch(err => res.json(err))
        }).catch(err => console.log(err.message))
})


//Login user or admin API
const userLogin = ((req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email: email })
        .then(user => {
            if (user.isBlocked) {
                return res.json({ isBlocked: true })
            }
            else if (user) {
                bcrypt.compare(password, user.password, (err, response) => {
                    if (response) {
                        const token = jwt.sign({
                            email: user.email,
                            name: user.name,
                            isAdmin: user.isAdmin,
                            isBlocked: user.isBlocked
                        }, "jwt-secret-key", { expiresIn: "1d" });
                        res.cookie('token', token)
                        return res.json({ token });
                    } else {
                        return res.json('Password is incorrect')
                    }
                })
            } else {
                return res.json('User not exist')
            }
        })
        .catch(err => console.log(err))
});

//logout
const userLogout = ((req, res) => {
    res.clearCookie('token');
    return res.json('Success')
})

// const userForgot = async (req, res) => {
//     const { email } = req.body
//     try {
//         const oldUser = await UserModel.findOne({ email })
//         if (!oldUser) {
//             return res.json({ status: "User does not exist." })
//         }
//         const secret = JWT_SECRET + oldUser.password
//         const token = jwt.sign(
//             { email: oldUser.email, id: oldUser._id },
//             secret,
//             { expiresIn: '5m' }
//         )
//         const link = `http://localhost:3000/reset-password/${oldUser._id}/${token}`
//         console.log(link)
//         return res.json({ status: "Password reset link generated.", link })
//     } catch (err) {
//         console.log(err)
//         return res.status(500).json({ status: "Error generating link." })
//     }
// }

// const userResetPwd = async (req, res) => {
//     const { id, token } = req.params
//     console.log(req.params)

//     const oldUser = await UserModel.findOne({ _id: id })
//     if (!oldUser) {
//         return res.json({ status: "User Not Exists!!" })
//     }
//     const secret = JWT_SECRET + oldUser.password

//     try {
//         const verify = jwt.verify(token, secret)
//         res.render("reset-password", { email: verify.email, id, token });
//     } catch (err) {
//         console.log(err)
//         res.send("Not Verified")
//     }
// }

// const userResetPwdSubmit = async (req, res) => {
//     const { id, token } = req.params
//     const { password } = req.body

//     const oldUser = await UserModel.findOne({ _id: id })
//     if (!oldUser) {
//         return res.json({ status: "User Not Exists!!" })
//     }
//     const secret = JWT_SECRET + oldUser.password

//     try {
//         const verify = jwt.verify(token, secret)
//         const hashedPassword = await bcrypt.hash(password, 10)
//         oldUser.password = hashedPassword
//         await oldUser.save()
//         res.json({ status: "Password reset successful" })
//     } catch (err) {
//         console.log(err)
//         res.send("Something went wrong")
//     }
// }

const sendEmail = ({ recipient_email, OTP }) => {
    return new Promise((resolve, reject) => {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            // host: "smtp.ethereal.email",
            port: 587,
            secure: false,
            auth: {
                user: process.env.MY_EMAIL,
                pass: process.env.MY_PASSWORD,
            },
        });

        const mailConfigs = {
            from: process.env.MY_EMAIL,
            to: recipient_email,
            subject: "KODING 101 PASSWORD RECOVERY",
            html: `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>OTP Email</title>
  </head>
  <body>
    <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
      <div style="margin:50px auto;width:70%;padding:20px 0">
        <div style="border-bottom:1px solid #eee">
          <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Koding 101</a>
        </div>
        <p style="font-size:1.1em">Hi,</p>
        <p>Thank you for choosing Koding 101. Use the following OTP to complete your Password Recovery Procedure. OTP is valid for 5 minutes</p>
        <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${OTP}</h2>
        <p style="font-size:0.9em;">Regards,<br />Koding 101</p>
        <hr style="border:none;border-top:1px solid #eee" />
        <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
          <p>Koding 101 Inc</p>
          <p>1600 Amphitheatre Parkway</p>
          <p>California</p>
        </div>
      </div>
    </div>
  </body>
  </html>`,
        };

        transporter.sendMail(mailConfigs, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                return reject({ message: 'Failed to send email. Please try again later.' });
            }
            resolve({ message: 'Email sent successfully' });
        });
    });
}

const sendOTP = (req, res) => {
    sendEmail(req.body)
        .then((response) => res.send(response.message))
        .catch((error) => res.status(500).send(error.message));
}

const userResetPwd = (req, res) => {
    const { email, password } = req.body;

    UserModel.findOne({ email: email })
        .then(user => {
            if (!user) {
                return res.status(404).json({ message: 'User does not exist' });
            }
            if (user.isBlocked) {
                return res.status(403).json({ isBlocked: true });
            }

            // Hash the new password and save it
            bcrypt.hash(password, 10, (err, hashedPassword) => {
                if (err) {
                    return res.status(500).json({ message: 'Error hashing password' });
                }

                user.password = hashedPassword;
                user.save()
                    .then(() => res.status(200).json({ message: 'Password updated successfully' }))
                    .catch(saveErr => res.status(500).json({ message: 'Error saving user', error: saveErr }));
            });
        })
        .catch(err => res.status(500).json({ message: 'Error finding user', error: err }));
};

module.exports = { userDefault, userLogin, userLogout, userRegister, sendOTP, userResetPwd}