const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'swapnilrsharma2806@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how to get along with the app. `
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'swapnilrsharma2806@gmail.com',
        subject: 'Cancelation successful!',
        text: `Hey ${name}, please let us know if you feel disappointed. We'll be more than happy to help!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}