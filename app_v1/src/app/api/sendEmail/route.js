// app/api/sendEmail/route.js

import nodemailer from 'nodemailer';


export async function POST(req) {
  try {
    // Parse the form data from the request body
    const formData = await req.json(); // Get the data sent in the POST request

    const { firmName, firmAddress, phoneNumber, email, products } = formData;

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email address.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Validate Phone Number (basic validation for example)
    const phoneRegex = /^[7-9][0-9]{9}$/;
    if (!phoneRegex.test(phoneNumber)) {
      return new Response(
        JSON.stringify({ error: 'Invalid phone number. It should be 10 digits.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

      // Validate Phone Number (basic validation for example)
      const firmNameRegex = /^[A-Za-z0-9&\.\-\s]{3,50}$/;

      if (!firmNameRegex.test(firmName)) {
        return new Response(
          JSON.stringify({ error: 'Invalid firmName' }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
      }
     
      const addressRegex = /^[A-Za-z0-9\s,.\-#]+(\s[A-Za-z0-9\s,.\-#]+)*$/;


      if (!addressRegex.test(firmAddress)) {
        return new Response(
          JSON.stringify({ error: 'Invalid firmAddress' }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
      }

    // Send email using Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Or another email provider
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const emailOptions = {
      from: process.env.EMAIL_USER,
      to: 'office@sastechnologies.net',
      // to:"rohitsinghmahant707@gmail.com", // Replace with the target email
      subject: 'Wholesale Inquiry - SAS Technologies',
      html: `
        <h2>Wholesale Inquiry Details</h2>
        <p><strong>Firm Name:</strong> ${firmName}</p>
        <p><strong>Firm Address:</strong> ${firmAddress}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Products Interested In:</strong></p>
        <p>${products}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(emailOptions);

    // // Send an SMS using Twilio
    // const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);
    // await twilioClient.messages.create({
    //   body: `Thank you for your inquiry, ${firmName}. We have received your details.`,
    //   from: process.env.TWILIO_PHONE_NUMBER,  // Replace with your Twilio phone number
    //   to: phoneNumber,
    // });

    // Return a success response
    return new Response(
      JSON.stringify({ message: 'Form submitted successfully!' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error sending email or SMS:', error);
    return new Response(
      JSON.stringify({ error: 'There was an issue submitting your form. Please try again later.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
