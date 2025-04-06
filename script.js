$(document).ready(function () {
    const envelope = $('#envelope');
    const btnOpen = $('#open');
    const btnReset = $('#reset');
    const photo = $('#photo');
    const letter = $('.letter');
  
    // Fungsi membuka dan menutup
    function openEnvelope() {
      envelope.addClass('open').removeClass('close');
    }
  
    function closeEnvelope() {
      envelope.addClass('close').removeClass('open');
      letter.removeClass('show-letter');
    }
  
    // Event: klik pada amplop atau tombol open
    envelope.on('click', openEnvelope);
    btnOpen.on('click', openEnvelope);
  
    // Event: klik tombol reset
    btnReset.on('click', closeEnvelope);
  
    // Event: klik pada gambar untuk munculkan isi surat
    photo.on('click', function () {
      letter.addClass('show-letter');
    });
  
    // Event: klik surat untuk menutup isi surat
    letter.on('click', function () {
      letter.removeClass('show-letter');
    });
  });
  