// 'use strict';
// import dotenv from 'dotenv';
// dotenv.config();

// const useEmail = (email: string, subject: string, message: string) => {
//   const nodemailer = require('nodemailer');
//   const { email_service, user, pass } = process.env;

//   const transporter = nodemailer.createTransport({
//     service: email_service,
//     auth: {
//       user: user,
//       pass: pass,
//     },
//   });

//   const mailOptions = {
//     from: { email },
//     to: user,
//     subject: `[BLOG] ${subject}`,
//     text: { message },
//   };

//   transporter.sendMail(mailOptions, (error: any, info: any) => {
//     if (error) {
//       console.error(error);
//     } else {
//       console.log('Email Sent : ', info);
//     }
//   });

//   return {};
// };

// export default useEmail;
