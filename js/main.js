// (function() {
//     emailjs.init("75J11341cpRrPflrH");
// })();

// function sendEmail(event) {
//     event.preventDefault();
//     emailjs.sendForm('service_zix9rf9', 'template_nptjy7h', event.target)
//         .then(function() {
//             alert('Pesan berhasil dikirim!');
//         }, function(error) {
//             alert('Gagal mengirim pesan. Silakan coba lagi.');
//         });
// }

const btn = document.getElementById('button');

document.getElementById('email-form').addEventListener
('submit', function(event)
    event.preventDefault();

    btn.value = 'Sending....';

    const serviceID = '';
    const templateID = ';
    
    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Send Email';
        alert('Email berhasil terkirim!');
        }, (err) => {
            btn.value = 'Send Email';
        alert(JSON.stringify(err));
        });