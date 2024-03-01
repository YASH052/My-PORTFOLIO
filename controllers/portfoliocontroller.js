
const sendEmailController = (req, res) => {
    try {
        return res.status(200).send({
            success: true,
            message: 'The email has been sent',
        })
    }
    catch (error) {
        return res.status(500).send({
            success: false,
            message: 'send email api error',
        })
    }
}
module.exports = { sendEmailController };