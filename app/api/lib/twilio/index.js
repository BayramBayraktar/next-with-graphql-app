

const accountSid = process.env._TWILIO_ACCOUNT_SID
const authToken = process.env._TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

export const PhoneVerificationCode = async (PhoneTo, message) => {
    return new Promise((resolve, reject) => {
        client.messages.create({
            body: message,
            from: process.env._APP_PHONE_FROM,
            to: PhoneTo
        }).then((result) => {
            checkMessageStatus(result.sid, resolve, reject);
        }).catch((error) => {
            reject({ message: 'Failed to send verification code', success: false });
        })
    })
}

const checkMessageStatus = (messageSid, resolve, reject) => {
    client.messages(messageSid).fetch()
        .then((message) => {
            if (message.status === 'sent') {
                resolve({ message: "kindly check your phone to activate your account!", success: true });
            } else {
                reject({ message: 'Failed to send verification code to phone', success: false });
            }
        }).catch(() => {
            reject({ message: 'Failed to send verification code', success: false });
        })
}