// src/pages/HomePage.jsx
import { Link as RouterLink } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      {/* ===== 1. HERO SEKCE ===== */}
      <section id="hero" className="d-flex align-items-center justify-content-center text-center text-white">
        <div data-aos="fade-in">
<h1 className="display-3">UMĚNÍ DOKONALÉHO BURGERU</h1>
  <p className="lead my-4">Šťavnaté maso od lokálních farmářů, naše vlastní bulky a poctivé domácí omáčky. <br /> To je burger, pro který se budete vracet.</p>
           <RouterLink className="btn btn-primary btn-lg fw-bold px-4" to="/rezervace">Rezervovat stůl</RouterLink>
        </div>
      </section>

      {/* ===== 2. NAŠE FILOZOFIE ===== */}
      <section id="filozofie" className="py-5">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5">NAŠE FILOZOFIE</h2>
            <p className="text-muted">Věříme ve tři základní pilíře.</p>
          </div>
          <div className="row text-center">
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="feature-icon-box p-4">
                <i className="bi bi-egg-fried display-2 text-primary"></i>
                <h3 className="h4 my-3">POCTIVÉ SUROVINY</h3>
                <p className="text-muted">Základem je kvalita. Spolupracujeme s lokálními farmáři, abychom vám na stůl přinesli to nejlepší.</p>
              </div>
            </div>
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-icon-box p-4">
                <i className="bi bi-cup-straw display-2 text-primary"></i>
                <h3 className="h4 my-3">SKVĚLÉ PIVO A DRINKY</h3>
                <p className="text-muted">Pečlivě ošetřené pivo z lokálních pivovarů a široká nabídka nápojů jsou naší chloubou.</p>
              </div>
            </div>
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
              <div className="feature-icon-box p-4">
                <i className="bi bi-people-fill display-2 text-primary"></i>
                <h3 className="h4 my-3">PŘÁTELSKÁ ATMOSFÉRA</h3>
                <p className="text-muted">Chceme, abyste se u nás cítili jako doma. Náš personál je tu pro vás s úsměvem.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 3. PŘÍBĚH ===== */}
      <section id="pribeh" className="py-5 bg-darker">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2864&auto=format&fit=crop" alt="Interiér restaurace" className="img-fluid rounded shadow-lg" />
            </div>
             <div className="col-lg-6 ps-lg-5" data-aos="fade-left">
              <h2 className="display-5 mt-4 mt-lg-0">NÁŠ PŘÍBĚH</h2>
              <p className="text-muted">Hostinec pod Kaštany je víc než jen restaurace. Je to místo setkávání, které píše svůj příběh již po generace. Navazujeme na to nejlepší z historie a přidáváme moderní pohled na gastronomii. Přijďte se stát součástí našeho příběhu.</p>
            </div>
          </div>
        </div>
      </section>

       {/* ===== 4. GALERIE ===== */}
      <section id="galerie" className="py-5">
        <div className="container">
           <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5">NAHLÉDNĚTE K NÁM</h2>
          </div>
          <div className="row g-4">
            <div className="col-md-6" data-aos="fade-up"><img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2874&auto=format&fit=crop" className="img-fluid rounded shadow-lg" alt="Prostředí restaurace 1"/></div>
            <div className="col-md-6" data-aos="fade-up" data-aos-delay="100"><img src="https://images.unsplash.com/photo-1578423354792-353a297397c0?q=80&w=2940&auto=format&fit=crop" className="img-fluid rounded shadow-lg" alt="Prostředí restaurace 2"/></div>
            <div className="col-md-12" data-aos="fade-up" data-aos-delay="200"><img src="https://images.unsplash.com/photo-1561340445-4565b5351ba2?q=80&w=2940&auto=format&fit=crop" className="img-fluid rounded shadow-lg" alt="Prostředí restaurace 3"/></div>
          </div>
        </div>
      </section>
      
      {/* ===== 5. KONTAKT A REZERVACE ===== */}
      <section id="navstivte-nas" className="py-5 text-center bg-darker">
        <div className="container" data-aos="fade-up">
           <h2 className="display-5">TĚŠÍME SE NA VÁS</h2>
           <p className="text-muted mb-4">Neváhejte a rezervujte si své místo včas.</p>
           <div className="my-4">
               <p className="mb-1"><strong>Adresa:</strong> Kaštanová 123, 400 01 Ústí nad Labem</p>
               <p><strong>Telefon:</strong> +420 123 456 789</p>
           </div>
           <RouterLink className="btn btn-primary btn-lg fw-bold px-5" to="/rezervace">Online Rezervace</RouterLink>
        </div>
      </section>

    </div>
  );
}
export default HomePage;