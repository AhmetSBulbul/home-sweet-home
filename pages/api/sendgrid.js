import sendgrind from "@sendgrid/mail";

sendgrind.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    console.log("REQ.BODY", req.body);
    await sendgrind.send({
      to: "ahmetsafabulbul@gmail.com",
      from: "ahmets.bulbul@gmail.com",
      subject: `[Lead from website] : ${req.body.subject}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="tr">
      <head>
        <meta charset="utf-8">
      
        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      <body>
  <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">
  </div>
  <div class="container" style="margin-left: 20px;margin-right: 20px;">
    <h3>You've got a new mail from ${req.body.fullname}, their email is: ✉️${req.body.email} </h3>
    <div style="font-size: 16px;">
      <p>Business Type: <strong>Android</strong></p>
      <p>Platform: <strong>Android</strong></p>
      <p>Budget: <strong>${req.body.budget}</strong></p>
      <br>
      <p>Message:</p>
      <p>${req.body.message}</p>
      <br>
    </div>
    <h3>Contact</h3>
    <div style="font-size: 16px;">
      <p>E-Mail: <strong>${req.body.email}</strong></p>
      <p>Phone: <strong>${req.body.phone}</strong></p>
      <p>Preffered Contact Adress: <strong>Whatsapp</strong></p>
      <br>
    </div>
    <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">Regards<br>Ahmet Safa Bülbül<br>Software Developer<br>+90 539 517 38 77</p>
    <div class="footer-links" style="display: flex;justify-content: center;align-items: center;">
      <a href="https://manuarora.in/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Website</a>
      <a href="https://manuarora.in/blog/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Blog</a>
      <a href="https://github.com/manuarora700/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">GitHub</a>
      <a href="https://instagram.com/maninthere/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Instagram</a>
      <a href="https://linkedin.com/in/manuarora28/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">LinkedIn</a>
      <a href="https://twitter.com/mannupaaji/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Twitter</a>

    </div>
  </div>
</body>
      </html>`,
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
