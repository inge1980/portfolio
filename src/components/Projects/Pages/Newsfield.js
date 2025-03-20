import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import videoNewsfield from "../../../vid/newsfield.mp4";


const Newsfield = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="container">
        <span id="nyhetsfelt"></span>
        <h1 className="text-start">Nyhetsfelt</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="subpage_container w-100">
                  <div className="row">
                    <div className="col-md-3">
                      <p className="text-start">
                      Her gjorde jeg det mulig å raskt legge til ny artikkel i nyhetsfelt via modalvindu uten å laste hele siden på nytt. 
                      I stedet for å ta omveien innom et administrasjonspanelet, kunne man da redigere direkte via CKEditor, inkludert en knapp for å laste opp filer
                      og en grei forhåndsvisning av artikkelen. Alt på samme plass bare et klikk unna, ned fra tidligere fem klikk.
                      </p>
                    </div>
                    <div className="col-md-9">
                      <video className="embed-responsive-item ratio ratio-1x1" controls autoplay muted>
                        <source src={videoNewsfield} type="video/mp4" />
                        Beklager, nettleseren din støtter ikke video.
                      </video>

                    </div>
                    <div className="col-md-12 backLink">
                      <React.Fragment>
                        <Nav.Link className="link-primary" onClick={() => navigate(-1)}>
                          Gå tilbake
                        </Nav.Link>
                      </React.Fragment>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Newsfield;