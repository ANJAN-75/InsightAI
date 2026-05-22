import dotenv from "dotenv"
dotenv.config()
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.GOOGLE_USER,
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
  },
});
transporter.verify()
.then(()=>{console.log("email transpoter is redy to send email")})
.catch(()=>{console.error("email transpoter is failed")})


export async function sendEmail({to,subject,html,text}) {
    const mailOptions={
        from:process.env.GOOGLE_USER,
        to,
        subject,
        html,
        text
    }
    const details=await transporter.sendEmail(mailOptions);
    console.log("send email",details)   
}