let messages = []

let id = 0

module.exports  = {
    create: (req,res) => {
        const {text, time} = req.body

        messages.push({id, text, time})
        id++
        res.status(200).send(messages)
    },
    read: (req, res) => {
        res.status(200).send(messages)
    },
    update: (req, res) => {
        /*
        req.params = {
            id: Number
        }

        req.body = {
            text: '',
            time: ''
        }
        */



        let index = messages.findIndex(message => message.id ===  +req.params.id)

        messages[index] = {
            id: req.params.id,
            text: req.body.text || messages[index].text,
            time: req.body.time || messages[index].time
          };
          res.status(200).send(messages)
    },

    delete: (req, res) => {
        let index = null;
        console.log(messages)
        messages.forEach((message, i) => {
            if(message.id === +req.params.id) index = i
        })

        messages.splice(index, 1)
        res.status(200).send(messages)


    }


}