const { formatPhoneNumber } = require('../utils')
require("dotenv").config();

const id = process.env.ID_WA

const toGroup = (client, data) => {
    const message = `*Informasi Tamu*
Nama: ${data.nama}
Instansi: ${data.instansi}
Tujuan: ${data.tujuan}`
    client.sendMessage(id, message);
}

const toGuest = (client, data) => {
    const message = `Selamat Datang di PT PLN Nusantara Power ULPLTD Kotamobagu Bapak/Ibu ${data.nama}`
    client.sendMessage(formatPhoneNumber(data.nohp), message);
}

module.exports = { toGroup, toGuest }

