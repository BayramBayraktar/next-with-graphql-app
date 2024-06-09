import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken'
import { NodemailerProps } from '../../../../types/index'

export const Transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "bayrambayraktar16@gmail.com",
        pass: "sabwftpjiatlaatt"
    },
    tls: {
        rejectUnauthorized: process.env.NODE_ENV !== 'development'
    }
});


export const NodeMailer = async ({ Email, Name, HashedPassword }: NodemailerProps) => {

    return new Promise((resolve, reject) => {

        if (process.env.NODEMAILER_USER) {

            let token
            //create token
            const tokenPayload = {
                name: Name,
                email: Email,
                password: HashedPassword
            }

            if (process.env.JWT_SECRET_KEY) {
                token = jwt.sign(
                    tokenPayload,
                    process.env.JWT_SECRET_KEY,
                    { expiresIn: '1h' }
                );
            } else {
                throw new Error('I cant access jwt private key')
            }


            var mailOptions = {
                from: `"Verify your email" ${process.env.NODEMAILER_USER}`,
                to: Email,
                subject: "Verify your email",
                html: `<h1>${Name}! thanks for registering on our site</h1>
                <a href="${process.env.CLIENT_URL}/auth/user/verify/${token}">Verify your email</a>
            `
            };

            Transporter.sendMail(mailOptions, async (error, info) => {
                if (error) {
                    reject({ success: false, message: 'Email could not be sent' })
                } else {
                    resolve({ success: true, message: 'Email send successfully' })
                }
            })

        } else {
            throw new Error('NODEMAILER_USER is not set in environment variables.')
        }
    })
};

