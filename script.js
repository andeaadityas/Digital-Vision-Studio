emailjs.init("wlvETw1ntVCgjIBtC");

function kirimBooking() {

    emailjs.send(
        "service_cfrb1qe",
        "template_csyjhd4",
        {
            nama: document.getElementById("nama").value,
            telepon: document.getElementById("telepon").value,
            layanan: document.getElementById("layanan").value,
            tanggal: document.getElementById("tanggal").value,
            pesan: document.getElementById("pesan").value
        }
    )

    .then(function() {
        alert("Booking berhasil dikirim! Kami akan segera menghubungi Anda.");

        document.getElementById("bookingForm").reset();

        tombol.innerText = "Booking Sekarang";
        tombol.disabled = false;
    })

    .catch(function(error) {
        alert("Gagal Mengirim Booking");

        console.log(error);

        tombol.innerText = "Booking Sekarang";
        tombol.disabled = false;
    });

}