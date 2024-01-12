const { formatPhoneNumber } = require('../utils')

const admin = formatPhoneNumber(process.env.WA_ALAN)

const toAdmin = (client, data) => {
    const message = `*Informasi Presensi*
Nama: ${data.nama}
Instansi: ${data.shift}
Tujuan: ${data.waktu}`
    client.sendMessage(admin, message);
}

module.exports = { toAdmin }