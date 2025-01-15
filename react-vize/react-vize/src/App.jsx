import React from "react";
import {FaTwitter, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "20px" }}>
      <div style={{ marginBottom: "20px" }}>
        <h1>Arda Karahan</h1>
        <p>Email: ArdaKarahan.com@gmail.com</p>
        <p>Telefon: +90 542 132 55 59</p>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h2>Eğitim Bilgileri</h2>
        <p>Üniversite: Kapadokya Üniversitesi</p>
        <p>Bölüm: Bilgisayar Programcılığı</p>
        <p>Mezuniyet Yılı: 2025</p>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h2>İş Deneyimi</h2>
        <p>Şirket: Boyteks Tekstil Sanayi ve Ticaret A.Ş.</p>
        <p>Pozisyon: C# Uygulama geliştirme proje sorumlusu</p>
        <p>Çalışma Süresi: Haziran 2023 - Kasım 2023</p>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h2>Yetenekler</h2>
        <ul>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h2>Hobiler ve İlgi Alanları</h2>
        <p>Yazılım</p>
        <p>Futbol</p>
        <p>Seyahat</p>
      </div>

      {/* Sosyal Medya */}
      <div style={{ marginBottom: "20px" }}>
        <h2>Sosyal Medya</h2>
        <a
          href="https://x.com/KARAH5N"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginRight: "10px" }}
        >
          <FaXTwitter size={30} />
        </a>
        <a
          href="https://www.instagram.com/karah5n/?next=%2F"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={30} />
        </a>
      </div>
    </div>
  );
}

export default App;