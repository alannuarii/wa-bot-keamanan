const formatPhoneNumber = (nohp) => {
    const nomorBersih = nohp.replace(/\D/g, '');
    const nomorWhatsApp = `62${nomorBersih.substring(1)}@c.us`;
  
    return nomorWhatsApp;
}

// console.log(formatPhoneNumber('085340029197'))

module.exports = { formatPhoneNumber }