import React from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import exportresults from "../../../img/excel.png";

const ExportResults = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="container">
        <span id="iktplan"></span>
        <h1 className="text-start">Eksport & sammenslåing av skjemadata</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="subpage_container w-100">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="wordBreakWrapper">
                        <div className="wordBreakImage w-25">
                          <a href={exportresults} target="_blank" rel="noopener noreferrer" title="Åpne bildet i ny fane">
                            <img
                              className="img-thumbnail"
                              src={exportresults}
                              alt="Eksempel på eksportering av data og filer"
                            />
                          </a>
                        </div>
                        <div className="wordBreakText">
                          <p className="text-start">
                            Etter utviklingen av en spørreskjema-mal for skjemabyggeren, oppstod behovet for å eksportere innsendte resultater til CSV- og XLS-format. Jeg tok ansvar for å implementere eksportfunksjonaliteten ved hjelp av PHPSpreadsheet. Løsningen inkluderte støtte for vedlagte filer, som ble pakket i en ZIP-fil før nedlastning. Etter eksporten kunne kundene åpne Excel-arket og finne fungerende lenker til de vedlagte filene for hvert innsendte resultat.
                          </p>
                          <p className="text-start">
                            Løsningen gjorde det enklere for administratorer å håndtere og analysere innsendte skjemaer, samtidig som den ivaretok personvern og datahåndtering i tråd med GDPR. Ved å legge ansvaret for videre behandling av data over på kunden, kunne vi slette informasjon hos oss i henhold til brukernes samtykke.
                          </p>
                          <p className="text-start">
                            Effektiv og brukervennlig eksportfunksjonalitet som gav kundene bedre innsikt i innsamlede data og sikret etterlevelse av GDPR-krav. Løsningen reduserte også manuelt arbeid for bedriftens administratorer og gjorde det lettere for kunder å sammenstille og dele informasjon på en sikker måte.
                          </p>
                        </div>
                      </div>
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

export default ExportResults;
