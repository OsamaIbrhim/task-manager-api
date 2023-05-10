const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'osamaibrhiim@gmail.com',
        subject: 'Welcome in my first Backend app',
        text: `Hi ${name}, 
        Let my know how you get along with the app`
    })
}

const sendCanceledEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'osamaibrhiim@gmail.com',
        subject: 'Canceled email',
        text: `Hi ${name}, 
        Your email is canceled successfully, 
        Let me know why you canceled your email, If there a reason or something in my app.
        
        best wishes,
        Osama.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCanceledEmail
}