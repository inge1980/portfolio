import React from "react";
import "./Intro.css";
import image from "../../img/author.jpg";

const Intro = () => {
  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={image}
                  className="img-fluid rounded-start"
                  alt="Profilbilde"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Hvem er jeg?</h5>
                  <p className="card-text">
                    ( Page is under construction, er det ikke det vi sier på
                    fagspråket ;) )
                    <br />
                    <br />
                    Hei, jeg er en fullstack-utvikler som ser etter fullstack /
                    frontend jobbmuligheter.
                  </p>
                  {false && (
                    <p className="card-text text-end">
                      <a
                        href="https://dummyimage.com/100x200&text=A"
                        class="btn btn-success"
                      >
                        Les mer
                      </a>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="i-desc"></p>
    </div>
  );
};

export default Intro;
