import nodemailer from "nodemailer";


export  async function POST(req) {
    const formData = await req.json(); 
  
    const { phoneNo, email, queryType, query } = formData;

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email address.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Validate Phone Number (basic validation for example)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
      return new Response(
        JSON.stringify({ error: 'Invalid phone number. It should be 10 digits.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Validate Query: Ensure it's not empty or gibberish
    if (!query || query.trim().length === 0) {
      return new Response(JSON.stringify({ error: "Query cannot be empty." }));
    }

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your email address
        pass: process.env.EMAIL_PASS, // your email password or app-specific password
      },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
      //   to: 'office@sastechnologies.net',
        to:"rohitsinghmahant707@gmail.com", // Replace with the target email
        subject: 'Normal Query- SAS Technologies',
        html: `
          <h2>Query Details</h2>
          <p><strong>Phone Number:</strong> ${phoneNo}</p>
          <p><strong>Email Address:</strong> ${email}</p>
          <p><strong>QueryType:</strong> ${queryType}</p>
          <p><strong>Query:</strong> ${query}</p>
        `,
      };
    try {
      await transporter.sendMail(mailOptions);
     return new Response( JSON.stringify({ message: 'Email sent successfully!' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } })
    } catch (error) {
      console.error('Error sending email or SMS:', error);
      return new Response(
        JSON.stringify({ error: 'There was an issue submitting your query . Please try again later' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

}
