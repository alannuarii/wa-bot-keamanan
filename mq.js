const amqp = require('amqplib')
const { toGroup, toGuest } = require('./controller/tamu')
const { toAdmin } = require('./controller/presensi')
require("dotenv").config();

const getData = async (client) => {
    const rabbitmqUrl = `amqp://${process.env.USER}:${process.env.PASSWORD}@${process.env.URL}/${process.env.VIRTUAL_HOST}`

    try {
        // Membuat koneksi ke RabbitMQ server
        console.log('Membuat koneksi ke RabbitMQ server...');
        const connection = await amqp.connect(rabbitmqUrl)

        // Membuat channel
        console.log('Membuat channel...');
        const channel = await connection.createChannel()

        // Mengonsumsi pesan dari queue
        console.log('Mengonsumsi pesan dari queue...');
        channel.consume('tamu', (message) => {
            const data = JSON.parse(message.content.toString())

            if (data.item === 'tamu') {
                toGroup(client, data)
                toGuest(client, data)
            } else if (data.item === 'presensi') {
                toAdmin(client, data)
            }
        }, { noAck: true })

        // Menampilkan informasi bahwa aplikasi telah terhubung saat dijalankan
        console.log('Aplikasi berhasil terhubung ke RabbitMQ server.')
    } catch (error) {
        console.error('Error:', error)
    }
}


module.exports = { getData }