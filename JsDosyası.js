document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-links a');
  const content = document.getElementById('content');

  const pages = {
      home: `<h1>Ana Sayfa</h1>
             <p>Geleceği Kodlayan Mühendisler, sürekli öğrenme ve paylaşım kültürüyle teknolojiye yön veriyor ve yenilikçi projeler geliştirerek geleceği şekillendiriyor.</p>`,
      yonetim: `<h1>Yönetim</h1>
                <p>Yönetim ekibimiz, geleceğe yön veren projeler ve etkinlikler organize eder.</p>`,
      etkinlikler: `<h1>Etkinlikler</h1>
                    <p>Kulüp olarak düzenlediğimiz ve katıldığımız etkinlikler.</p>`,
      komiteler: `<h1>Komitelerimiz</h1>
                  <p>Kulübümüzün aktif komiteleri ve bu komitelerde yer alan üyeler.</p>`,
      takimlar: `<h1>Takımlarımız</h1>
                 <p>Kulüp üyelerimizin oluşturduğu proje takımları.</p>`,
      hakkimizda: `<h1>Hakkımızda</h1>
                   <p>Kulübümüz hakkında daha fazla bilgi.</p>`,
      iletisim: `<h1>İletişim</h1>
                 <p>Bize ulaşabileceğiniz iletişim kanalları.</p>`
  };

  navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
          e.preventDefault();
          const page = this.getAttribute('data-page');
          content.innerHTML = pages[page];
      });
  });
});
