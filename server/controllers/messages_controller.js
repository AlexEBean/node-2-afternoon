let messages = []
let id = 0

module.exports = {
    create: (req, res) => {
        const {text, time} = req.body
        const message = {
            id,
            text,
            time
        }
        messages.push(message)
        // Without the message variable, messages.push({ id, text, time }) would also work
        id++

        res.status(200).send(messages)
    },

    read: (req, res) => {
        res.status(200).send(messages)
    },

    update: (req, res) => {
        let index = messages.findIndex(el => el.id === +req.params.id)
        let message = messages[index]
        messages[index] = {
            id: message.id,
            // new title/author or old one
            text: req.body.text || message.text,
            time: message.time
            // Don't need || in  time because update is only intended to change text
        }
        res.status(200).send(messages)
    },

    delete: (req, res) => {
        let index = messages.findIndex(el => el.id === +req.params.id)
        messages.splice(index, 1)
        res.status(200).send(messages)
    },
}