import nodemailer from 'nodemailer';

export type EmailData = {
  from: string;
  subject: string;
  message: string;
};

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.user,
    pass: process.env.pass,
  },
});

export async function sendEmail(data: EmailData) {
  const mailData = {
    to: process.env.user,
    subject: `[BLOG] ${data.subject}`,
    from: data.from,
    html: `
      <h1>${data.subject}</h1>
      <div>${data.message}</div>
      <br/>
      <p>보낸사람 : ${data.from}</p>
    `,
  };

  return transporter.sendMail(mailData);
}
