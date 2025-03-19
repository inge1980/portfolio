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
        periodstart: "2022",
        periodend: "2025",
        description:
          "Arbeidet med utvikling og forbedring av systemer innen e-handel, ERP og kantineløsninger.",
        projects: [
          {
            title: "Mobilvennlig nettbutikk & API",
            image: e1,
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
              { text: "Les mer", url: "/portfolio/projects/shoplet/" },
            ],
          },
          {
            title: "Tilpasset ordresystem & ERP-integrasjon",
            image: e2,
            description:
              "Designet og utviklet et spesialtilpasset ordresystem som forbedret brukergrensesnitt og optimaliserte ERP-integrasjonen.",
            links: [
              { text: "Les mer", url: "/portfolio/projects/ordreadmin/" },
            ],
          },
          {
            title: "PIM-integrasjon i ERP",
            image: e3,
            description:
              "Designet, utviklet og integrerte et PIM-system til eksisterende ERP, og forbedret produktinformasjonshåndtering og synkronisering på tvers av plattformer.",
            links: [
              { text: "Les mer", url: "/portfolio/projects/PIM/" },
            ],
          },
          {
            title: "ERP Videreutvikling & Serveradministrasjon",
            description:
              "Optimaliserte ERP-systemets ytelse og sikkerhet, og forbedret integrasjonen med nettbutikken.",
          },
          {
            title: "Kantinesystem med ERP-integrasjon",
            image: e5,
            description:
              "Designet og utviklet et kantinesystem med avdelingsbestilling, integrert med ERP for effektiv lagerstyring.",
            links: [
              { text: "Les mer", url: "/portfolio/projects/kantine/" },
            ],
          },
        ],
      },
      {
        company: "Moava AS",
        role: "Fullstack-utvikler",
        periodstart: "2013",
        periodend: "2022",
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
            image: a7,
            description:
              "Utviklet en ny nyhetskarusell-modul som brukte eksisterende innhold fra nyhetsfeltet, og la til støtte for videoavspilling for økt visuell dynamikk.",
            links: [
              {
                text: "Demo",
                url: "https://alt.moava.org/index.php?pageID=23",
              },
            ],
          },
          {
            title: "UI/UX-forbedringer i IKTplan.no (2018)",
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
            image: a2,
            description:
              "Designet og utviklet en responsiv mobilmeny med fleksibel navigasjon og støtte for flere visningsmoduser.",
            links: [
              {
                text: "Demo og kode",
                url: "https://jsfiddle.net/turbopipp/6qw4075d/",
              },
            ],
          },
          {
            title: "Effektivisering av artikkelredigering",
            image: a1,
            description:
              "Reduserte antall klikk i CMS-redigering fra fem til ett.",
            links: [
              { text: "Les mer", url: "/portfolio/projects/nyhetsfelt/" },
            ],
          },
          {
            title: "GDPR-vennlig drag'n'drop skjemabygger",
            image: m1,
            description:
              "Lagde en fleksibel skjemabygger med automatisert sletting av sensitive data.",
            links: [
              { text: "Les mer", url: "/portfolio/projects/skjemabygger/" },
            ],
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
        periodstart: "2024",
        periodend: "2025",
        projects: [
          {
            title: "Dynamiske drag'n'drop lister",
            image: r5,
            description:
              "Utviklet en app med dynamisk drag'n'drop listehåndtering og støtte for flere hierarkiske nivåer.",
            links: [
              { text: "Les mer", url: "/portfolio/projects/shoppinglist/" },
            ],
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
        periodstart: "2022",
        periodend: "2025",
        projects: [
          {
            title: "Eksperimentering med Next.js & hooks",
            image: r4,
            description: "Testing av Next.js-hosting og hooks-optimalisering.",
            links: [
              {
                text: "Demo",
                url: "https://showcase-ivory.vercel.app/",
              },
              {
                text: "Kode",
                url: "https://github.com/inge1980/showcase/",
              },
            ],
          },
          {
            title: "Simulert hotellbookingsystem",
            image: r7,
            description:
              "Utviklet et hotellreservasjonssystem med validering og automatisering av skjemaer for bedre brukeropplevelse.",
            links: [
              {
                text: "Demo",
                url: "https://hotel-booking-case-2024-improved.vercel.app/",
              },
              {
                text: "Kode",
                url: "https://github.com/inge1980/hotel_booking_case_2024_improved",
              },
            ],
          },
          {
            title: "Porteføljeside med prosjektoversikt",
            image: r6,
            description:
              "Lagde en responsiv porteføljeside med dynamisk navigasjon, tilpasset design og enhetstester.",
            links: [
              {
                text: "Kode",
                url: "https://github.com/inge1980/portfolio/",
              },
            ],
          },
          {
            title: "Datavisualisering med Stack Overflow-API",
            image: r2,
            description:
              "Hentet og visualiserte brukerdata fra Stack Overflow ved hjelp av kakediagrammer.",
            links: [
              {
                text: "Demo",
                url: "https://inge1980.github.io/stackoverflow-tags/",
              },
              {
                text: "Kode",
                url: "https://github.com/inge1980/stackoverflow-tags/",
              },
            ],
          },
          {
            title: "Inge Movie Database (IMDB)",
            image: r1,
            description: "Egendefinert filmindeks med søkefunksjonalitet.",
            links: [
              { text: "Les mer", url: "/portfolio/projects/imdb/" },
              {
                text: "Demo",
                url: "https://inge1980.github.io/movies/",
              },
              {
                text: "Kode",
                url: "https://github.com/inge1980/movies/",
              },
            ],
          },
        ],
      },
      {
        title: "PHP/WordPress & JavaScript Spillutvikling",
        periodstart: "2012",
        periodend: "2013",
/*         description:
        "Automatiserte nyheter og varsler for lokalbefolkningen via WordPress og RSS.", */
        projects: [
          {
            title: "Automatisert nyhetsfeed for Osedalen.org",
            image: a8,
            description: "Automatiserte nyheter og varsler for lokalbefolkningen via WordPress og RSS.",
            links: [
              {
                text: "Demo",
                url: "https://www.osedalen.org/",
              },
            ],
          },
          {
            title: "Spill på under 1024 byte",
            image: a9,
            description:
              "Minimalistisk spill hvor Cupid skyter hjerter, laget for en kodeutfordring med plassbegrensning.",
            links: [
              {
                text: "Demo",
                url: "https://js1k.com/2012-love/demo/1269/",
              },
              {
                text: "Kode",
                url: "https://js1k.com/2012-love/details/1269/",
              },
            ],
          },
        ],
      },
      {
        title: "Perl: Webutvikling",
        periodstart: "2001",
        periodend: "2003",
        projects: [
          {
            title: "Søkbart SMS-vitsearkiv i Perl",
            image: a10,
            description:
              "Bygde opp et av Norges største vitsearkiver med over 10 000 månedlige brukere. Søkbart CMS i Perl.",
            links: [
              {
                text: "Demo",
                url: "https://web.archive.org/web/20040526200014/http://need4sms.com:80/",
              },
            ],
          },
        ],
      },
    ],
  },
];

export default Projects;
