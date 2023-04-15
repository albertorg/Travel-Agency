import sgMail from '@sendgrid/mail';
import { render } from '@react-email/render'
import { Email } from './email';


export const sendEmail = async (to) => {
    sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY)

    const emailHtml = render(<Email/>)

    const msg = {
        to: 'ticoc911@gmail.com', // Change to your recipient
        from: 'support@funtravels.net', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: emailHtml,
    }

    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })
    

}









