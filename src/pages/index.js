import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';

import pic2 from '../assets/images/BeniHochuli.gif';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic07.jpg';
import pic8 from '../assets/images/pic08.jpg';
import Scroll from '../components/Scroll';

const sections = [
  { id: 'Über uns', name: 'Über uns', icon: 'fa-home' },
  { id: 'Todesfall', name: 'Todesfall', icon: 'fa-th' },
  { id: 'Notwendiges', name: 'Notwendiges', icon: 'fa-user' },
  { id: 'Kontakt', name: 'Kontakt', icon: 'fa-envelope' },
];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="container">
          <h2 className="alt">
            Hochuli <strong>Bestattungen</strong>
            <br />
          </h2>
          <p>
            Info: Durch die aktuelle Situation in der Schweiz, sind
            Einschränkungen in Bezug auf Trauerfeiern und Beisetzung verfügt
            worden. Diese können je nach Gemeinde unterschiedlich ausfallen.
            Bitte nehmen Sie diesbezüglich mit uns Kontakt auf. Wir suchen mit
            Ihnen nach Lösungen und sind mit all unseren Ressourcen für Sie da.
          </p>
          <Scroll type="id" element={'portfolio'}>
            <a href="#contact" className="button">
              Kontakt
            </a>
          </Scroll>
          <div>
            Das Durchschnittliche gibt der Welt ihren Bestand, das
            Aussergewöhnliche ihren Wert. — Oscar Wilde
          </div>
        </div>
      </section>

      <section id="portfolio" className="two">
        <div className="container">
          <header>
            <h2>Wer wir sind, Philosophie</h2>
          </header>

          <p>
            Sie haben die Gewissheit, dass jeder Verstorbene durch uns mit
            allergrösster Achtung, Sorgfalt und Respekt auf seinem letzten Wege
            begleitet wird. Dafür stehe ich mit meinem Namen ein. — Beni Hochuli
            (Geschäftsinhaber)
          </p>

          <div className="row">
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic2} alt="" />
                </a>
                <header>
                  <h3>Beni Hochuli</h3>
                </header>
              </article>
            </div>
          </div>

          <p>
            MitarbeiterInnen: Stefan Lendenmann (Bestatter), Manuela Schmid
            (Bestatterin ), Marco Faga (Bestatter), Andrea Ramseyer
            (Bestatterin/IT), Isabelle Stebler (Kurierdienste / Logistik),
            Glorya Wyss (Bestatterin)
          </p>
        </div>
      </section>

      <section id="contact" className="four">
        <div className="container">
          <header>
            <h2>Kontakt</h2>
          </header>

          <p>
            The element of time, sem ante ullamcorper dolor nulla quam placerat
            viverra environment is not with our customers. Free makeup and skirt
            until the mouse. Japan this innovative and ultricies carton salad
            clinical ridiculous now passes from enhanced. Mauris pot innovative
            care for my pain.
          </p>

          <form method="post" action="#">
            <div className="row">
              <div className="col-6 col-12-mobile">
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className="col-6 col-12-mobile">
                <input type="text" name="email" placeholder="Email" />
              </div>
              <div className="col-12">
                <textarea name="message" placeholder="Nachricht" />
              </div>
              <div className="col-12">
                <input type="submit" value="Nachricht senden" />
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;
