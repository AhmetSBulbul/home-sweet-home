import sendgrind from "@sendgrid/mail";

sendgrind.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    console.log("REQ.BODY", req.body);
    await sendgrind.send({
      to: "ahmetsafabulbul@gmail.com",
      from: "ahmets.bulbul@gmail.com",
      subject: `${req.body.subject}`,
      html: `<div>Mail geldi</div>`,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(error.statusCode || 500)
      .json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
