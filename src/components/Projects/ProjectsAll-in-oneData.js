import r1 from "../../img/react-movies.png";
import r2 from "../../img/react-stackoverflow.png";
import r4 from "../../img/react-nextjs-hooks.png";
import r5 from "../../img/react-native-shoppinglist.png";
import r6 from "../../img/react-native-portfolio.png";
import r7 from "../../img/react-nextjs-hotel-booking.png";
import a1 from "../../img/php-bootstrap-modal-ckeditor-inline-edit-news-field.png";
import a2 from "../../img/bootstrap-double-menu.png";
import a3 from "../../img/bootstrap-aspect-ratio.png";
import a5 from "../../img/javascript-preload-images.png";
import a6 from "../../img/bootstrap-thumbnail-gallery.png";
import a7 from "../../img/bootstrap-news-carousel.png";
import a8 from "../../img/osedalen.png";
import a9 from "../../img/javascript-1016-byte-game.png";
import a10 from "../../img/perl-cgi-collection-of-jokes-need4sms.png";
import m1 from "../../img/php-bootstrap-form-builder.png";
import e1 from "../../img/php-bootstrap-shoplet.png"; 
import e2 from "../../img/php-bootstrap-order_admin_system.png"; 
import e3 from "../../img/php-bootstrap-PIM_admin_system.png"; 
import e4 from "../../img/php-bootstrap-kantine_adminsystem_1.png"; 
import e5 from "../../img/php-bootstrap-kantine_adminsystem_2.png"; 

import React from "react";
const Projects = [
  {
    category: "Profesjonell erfaring",
    sections: [
      {
        company: "Episteme AS",
        role: "Fullstack- og frontend-utvikler",
        period: "2022-2025",
        description:
          "Arbeidet med utvikling og forbedring av systemer innen e-handel, ERP og kantineløsninger.",
        projects: [
          {
            title: "Mobilvennlig nettbutikk & API",
            image: r5,
            description: (
              <>
                Redesignet nettbutikk for mobilbruk, implementert{" "}
                <abbr title="REST API (also called a RESTful API or RESTful web API)">
                  REST API
                </abbr>{" "}
                og dynamisk prissetting.
              </>
            ),
            links: [
              { text: "Les mer", url: "/portfolio/projects/shoppinglist/" },
              {
                text: "Demo",
                url: "https://inge1980.github.io/stackoverflow-tags/",
              },
              {
                text: "Kode",
                url: "https://github.com/inge1980/stackoverflow-tags/",
              },
              {
                text: "Demo og kode",
                url: "https://jsfiddle.net/turbopipp/0hsqLner/",
              },
            ],
          },
          {
            title: "Tilpasset ordresystem & ERP-integrasjon",
            image: r5,
            description:
              "Designet og utviklet et spesialtilpasset ordresystem som forbedret brukergrensesnitt og optimaliserte ERP-integrasjonen.",
          },
          {
            title: "PIM-integrasjon i ERP",
            image: r5,
            description:
              "Designet, utviklet og integrerte et PIM-system til eksisterende ERP, og forbedret produktinformasjonshåndtering og synkronisering på tvers av plattformer.",
          },
          {
            title: "ERP Videreutvikling & Serveradministrasjon",
            image: r5,
            description:
              "Optimaliserte ERP-systemets ytelse og sikkerhet, og forbedret integrasjonen med nettbutikken.",
          },
          {
            title: "Kantinesystem med ERP-integrasjon",
            image: r5,
            description:
              "Designet og utviklet et kantinesystem med avdelingsbestilling, integrert med ERP for effektiv lagerstyring.",
          },
        ],
      },
      {
        company: "Moava AS",
        role: "Fullstack-utvikler (CMS & webapplikasjoner)",
        period: "2013-2022",
        description:
          "Utviklet og forbedret Moava sitt CMS, med fokus på UX, responsivt design og automatisering.",
        projects: [
          {
            title: "Bootstrap-migrering & mobilvennlig design",
            description:
              "Automatiserte migreringen til Bootstrap, forbedret responsivt design på tvers av plattformer.",
          },
          {
            title: "Nyhetskarusell med video",
            description:
              "Utviklet en ny nyhetskarusell-modul som brukte eksisterende innhold fra nyhetsfeltet, og la til støtte for videoavspilling for økt visuell dynamikk.",
          },
          {
            title: "UI/UX-forbedringer i IKTplan.no",
            description:
              "Brukertesting og UI/UX-forbedringer i IKTplan.no, slik at lærere fikk en mer oversiktlig tilgang til læreplanen.",
          },
          {
            title: "Dynamisk temavelger & fargetilpasning",
            description:
              "Utviklet en dynamisk temavelger som forenklet tilpasningen av nettsider.",
          },
          {
            title: "Fleksibel dobbel mobilmeny",
            description:
              "Designet og utviklet en responsiv mobilmeny med fleksibel navigasjon og støtte for flere visningsmoduser.",
          },
          {
            title: "Effektivisering av artikkelredigering",
            description:
              "Reduserte antall klikk i CMS-redigering fra fem til ett.",
          },
          {
            title: "GDPR-vennlig drag’n’drop skjemabygger",
            description:
              "Lagde en fleksibel skjemabygger med automatisert sletting av sensitive data.",
          },
          {
            title: "Eksport & sammenslåing av skjemadata",
            description:
              "Bygde eksportfunksjonalitet for CSV/XLS, inkludert vedleggshåndtering.",
          },
          {
            title: "Kundetilfredshetsundersøkelse",
            description:
              "Utviklet et verktøy for å samle innsikt etter 10 år uten brukerundersøkelser.",
          },
          {
            title: "Analyse & trafikkoptimalisering",
            description:
              "Optimaliserte trafikkmåling og digital sporing i CMS.",
          },
        ],
      },
    ],
  },
  {
    category: "Personlige utviklingsprosjekter",
    description: "Utvikling og eksperimentering innen Perl, PHP, React og React Native.",
    sections: [
      {
        title: "React Native: Mobilapper",
        period: "2024-2025",
        projects: [
          {
            title: "Dynamiske drag'n'drop lister",
            description:
              "Utviklet en app med dynamisk drag'n'drop listehåndtering og støtte for flere hierarkiske nivåer.",
          },
          {
            title: "Avansert kalkulator med PEMDAS-støtte",
            description:
              "Designet en kalkulator-app som håndterer parenteser og operatorprioritet for matematiske uttrykk.",
          },
        ],
      },
      {
        title: "React: Eksperimentering med nye teknologier",
        period: "2022-2025",
        projects: [
          {
            title: "Eksperimentering med Next.js & hooks",
            description: "Testing av Next.js-hosting og hooks-optimalisering.",
          },
          {
            title: "Simulert hotellbookingsystem",
            description:
              "Utviklet et hotellreservasjonssystem med validering og automatisering av skjemaer for bedre brukeropplevelse.",
          },
          {
            title: "Porteføljeside med prosjektoversikt",
            description:
              "Lagde en responsiv porteføljeside med dynamisk navigasjon, tilpasset design og enhetstester.",
          },
          {
            title: "Datavisualisering med Stack Overflow-API",
            description:
              "Hentet og visualiserte brukerdata fra Stack Overflow ved hjelp av kakediagrammer.",
          },
          {
            title: "Inge Movie Database (IMDB)",
            description: "Egendefinert filmindeks med søkefunksjonalitet.",
          },
        ],
      },
      {
        title: "PHP/WordPress - Automatisert nyhetsfeed for Osedalen.org",
        period: "2013",
        description:
        "Automatiserte nyheter og varsler for lokalbefolkningen via WordPress og RSS.",
        projects: [
          {
            title: "",
            description: "",
          },
        ],
      },
      {
        title: "JavaScript: Spillutvikling",
        period: "2012",
        projects: [
          {
            title: "Spill på under 1024 byte",
            description:
              "Minimalistisk spill hvor Cupid skyter hjerter, laget for en kodeutfordring med plassbegrensning.",
          },
        ],
      },
      {
        title: "Perl: Webutvikling",
        period: "2001-2003",
        projects: [
          {
            title: "Søkbart SMS-vitsearkiv i Perl",
            description:
              "Bygde opp et av Norges største vitsearkiver med over 10 000 månedlige brukere. Søkbart CMS i Perl.",
          },
        ],
      },
    ],
  },
];

export default Projects;
