import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// Knihovny pro scrollování a galerii
import { Link as ScrollLink } from 'react-scroll';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Import vašeho loga a všech obrázků
import logo from '../assets/logo.png';
import heroPozadi from '../assets/hostinec-vnitrek.jpg'; // Hlavní fotka na pozadí
import interierRestaurace from '../assets/interier-restaurace.jpg'; // Fotka k příběhu
import galerie1 from '../assets/galerie1.jpg'; // Fotky do galerie
import galerie2 from '../assets/galerie2.jpg';
import galerie3 from '../assets/galerie3.jpg';
import galerie4 from '../assets/galerie4.jpg';


function HomePage() {
  // Stav pro ovládání lightboxu v galerii
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Příprava obrázků pro galerii
  const galleryImages = [
    { src: galerie1, alt: 'Fotka z naší restaurace 1' },
    { src: galerie2, alt: 'Fotka z naší restaurace 2' },
    { src: galerie3, alt: 'Fotka z naší restaurace 3' },
    { src: galerie4, alt: 'Fotka z naší restaurace 4' },
  ];
  const lightboxSlides = galleryImages.map(img => ({ src: img.src }));

  // Spolehlivější nastavení pozadí pro hero sekci
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${heroPozadi})`
  };

  return (
    <div>
      {/* ===== HERO SEKCE ===== */}
      <section id="hero" className="d-flex align-items-center justify-content-center text-center text-white" style={heroStyle}>
        <div data-aos="fade-in">
          <img src={logo} alt="Logo Hostince pod Kaštany" className="logo" />
          <h1 className="display-3">POCTIVÉ BURGERY & SKVĚLÉ PIVO</h1>
          <p className="lead my-4">Přijďte se k nám dobře najíst a napít se dobrého českého piva z pivovaru Bakalář.</p>
          <RouterLink className="btn btn-primary btn-lg fw-bold px-4" to="/rezervace">Rezervovat stůl</RouterLink>
          {/* Přebytečná šipka je smazaná, zůstává jen ta plovoucí z App.jsx */}
        </div>
      </section>

      {/* ===== NAŠE FILOZOFIE ===== */}
      <section id="filozofie" className="py-5">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5">NA CO SE MŮŽETE TĚŠIT</h2>
          </div>
          <div className="row text-center">
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="feature-icon-box p-4">
                <i className="bi bi-egg-fried display-2 text-primary"></i>
                <h3 className="h4 my-3">NAŠE SPECIALITY</h3>
                <p className="text-muted">Specializujeme se na burgery, kterých máme velké portfolio. Najdete u nás ale i klasiku jako smažený sýr, vždy čerstvý a v několika druzích strouhanek.</p>
              </div>
            </div>
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-icon-box p-4">
                <i className="bi bi-cup-straw display-2 text-primary"></i>
                <h3 className="h4 my-3">POCTIVÉ NÁPOJE</h3>
                <p className="text-muted">Točíme pivo Bakalář z královského pivovaru v Rakovníku (zal. 1454). Nabízíme také velký výběr domácích limonád a točený Aperol.</p>
              </div>
            </div>
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
              <div className="feature-icon-box p-4">
                <i className="bi bi-people-fill display-2 text-primary"></i>
                <h3 className="h4 my-3">PROSTOR PRO VÁS</h3>
                <p className="text-muted">Naše útulná restaurace nabízí 9 stolů. Pro soukromé oslavy máme salonek pro 20 osob a venkovní zahrádka s hřištěm pojme až 70 hostů.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* ===== PŘÍBĚH (S MENŠÍM OBRÁZKEM) ===== */}
      <section id="pribeh" className="py-5 bg-darker">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-3 mb-4 mb-lg-0" data-aos="fade-right">
              <img src={interierRestaurace} alt="Interiér restaurace" className="img-fluid rounded shadow-lg" />
            </div>
            <div className="col-lg-7 offset-lg-1" data-aos="fade-left">
              <h2 className="display-5 mt-4 mt-lg-0">OD PIVNICE K RESTAURACI</h2>
              <p className="text-muted">Hostinec provozujeme od prosince 2016. Z původní pivnice nás láska ke gastronomii vedla k vybudování nové kuchyně. V únoru 2025 jsme hostinec zrekonstruovali do podoby útulné restaurace, kde se budete cítit jako doma.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GALERIE ===== */}
      <section id="galerie" className="py-5">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5">NAHLÉDNĚTE K NÁM</h2>
          </div>
          <div className="row g-4">
            {galleryImages.map((image, i) => (
              <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={i * 100} key={i}>
                <img 
                  src={image.src} 
                  className="img-fluid rounded shadow-lg gallery-thumbnail" 
                  alt={image.alt}
                  onClick={() => {
                    setIndex(i);
                    setOpen(true);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* ===== AKCE A PRONÁJMY ===== */}
       <section id="akce" className="py-5">
        <div className="container">
           <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5">SVATBY, PLESY A OSLAVY</h2>
            <p className="text-muted">Uspořádejte u nás vaši akci. Vše zařídíme na klíč.</p>
          </div>
          <div className="row text-center">
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
                <h4>Plesový sál</h4>
                <p className="text-muted">Pronajměte si náš sál s předsálím a barem o celkové kapacitě 150 lidí. Ideální pro plesy, zábavy nebo velké svatby. Rádi vám připravíme kompletní catering.</p>
              </div>
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                <h4>VIP Salónek</h4>
                <p className="text-muted">Pro menší akce, firemní večírky nebo narozeninové oslavy je ideální náš VIP salónek v patře. Má vlastní bar s pípou a pojme cca 40 lidí.</p>
              </div>
          </div>
        </div>
      </section>
      
      {/* ===== KONTAKT ===== */}
      <section id="navstivte-nas" className="py-5 text-center bg-darker">
        <div className="container" data-aos="fade-up">
           <h2 className="display-5">TĚŠÍME SE NA VÁS</h2>
           <p className="text-muted mb-4">Najdete nás ve Skoroticích, kousek od kostela sv. Václava.</p>
           <div className="my-4">
               <p className="mb-1"><strong>Adresa:</strong> ul. 5. května 29, 403 40 Skorotice</p>
               <p><strong>Telefon pro rezervace:</strong> 775 291 560</p>
           </div>
           <RouterLink className="btn btn-primary btn-lg fw-bold px-5" to="/rezervace">Online Rezervace</RouterLink>
        </div>
      </section>

      {/* Komponenta Lightboxu */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={lightboxSlides}
        index={index}
      />
    </div>
  );
}

export default HomePage;