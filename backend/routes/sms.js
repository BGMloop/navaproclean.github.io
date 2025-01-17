import express from 'express';
import twilio from 'twilio';

const router = express.Router();
const accountSid = process.env.ACCOUNT_SID; // Twilio Account SID
const authToken = process.env.AUTH_TOKEN; // Twilio Auth Token
const twilioPhoneNumber = process.env.PHONE_NUMBER; // Twilio Phone Number

const client = twilio(accountSid, authToken);

// Route to send SMS
router.post('/send', async (req, res) => {
    const { to, message } = req.body;

    try {
        const messageResponse = await client.messages.create({
            body: message,
            from: twilioPhoneNumber,
            to: to,
        });

        res.status(200).json({ success: true, message: messageResponse.sid });
    } catch (error) {
        console.error("Error sending SMS:", error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// Route to receive SMS
router.post('/receive', (req, res) => {
    const { From, Body } = req.body;
    console.log(`Received SMS from ${From}: ${Body}`);
    res.send('<Response></Response>'); // Respond with an empty TwiML response
});

export default router;