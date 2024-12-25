import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send the email
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: "japanese@monashclubs.org",
        subject: "Enquiry from MJC Website",
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\nDisclaimer: Do not reply to this email. Send a direct email to the enquirer at ${email}.`,
      });

      res.status(200).json({ message: "Enquiry submitted successfully!" });
    } catch (error: any) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
