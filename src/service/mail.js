const nodemailer = require('nodemailer');
const env = require('../config/config');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: env.CONTACT_EMAIL,
    pass: env.CONTACT_PASSWORD,
  },
});

module.exports.shareTaskEmail = async (email, task) => {
  const mailOptions = {
    from: `${env.CONTACT_EMAIL}`,
    to: email,
    subject: `Task Shared: ${task.title}`,
    text: `You have been invited to view the task: ${task.title}\n\nDescription: ${task.description}\nDue Date: ${task.dueDate}\nPriority: ${task.priority}\n\nBest regards.`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(info.response);
  } catch (error) {
    console.error(error);
  }
};
