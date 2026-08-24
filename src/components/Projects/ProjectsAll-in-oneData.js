import r1 from "../../img/react-movies.png";
import r2 from "../../img/react-stackoverflow.png";
import r4 from "../../img/react-nextjs-hooks.png";
import r5 from "../../img/react-native-shoppinglist.png";
import r6 from "../../img/react-native-portfolio.png";
import r7 from "../../img/react-nextjs-hotel-booking.png";
import r8 from "../../img/react-native-calculator.png";
import r9 from "../../img/react-nextjs-dnd.png";
import a1 from "../../img/php-bootstrap-modal-ckeditor-inline-edit-news-field.png";
import a2 from "../../img/bootstrap-double-menu.png";
import a7 from "../../img/bootstrap-news-carousel.png";
import a8 from "../../img/osedalen.png";
import a9 from "../../img/javascript-1016-byte-game.png";
import a10 from "../../img/perl-cgi-collection-of-jokes-need4sms.png";
import a11 from "../../img/javascript-user-insight-google-analytics.png";
import a12 from "../../img/php-bootstrap-quiz.png";
import a13 from "../../img/javascript-color-picker.png";
import a14 from "../../img/php-bootstrap-iktplan.png";
import a15 from "../../img/excel.png";
import m1 from "../../img/php-bootstrap-form-builder.png";
import m2 from "../../img/php-bootstrap-mobile-first.png";
import e1 from "../../img/php-bootstrap-shoplet.png"; 
import e2 from "../../img/php-bootstrap-order_admin_system.png"; 
import e3 from "../../img/php-bootstrap-PIM_admin_system.png"; 
import e5 from "../../img/php-bootstrap-kantine_adminsystem_2.png"; 
import e6 from "../../img/php-erp-blurry.png";

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
            textid: 'webshop',
            title: "Mobilnettbutikk & REST API",
            image: e1,
            description: (
              <>
                Redesignet mobil, implementert dynamisk prissetting og{" "}
                <abbr title="REST API (også kalt RESTful API eller RESTful web API)">
                  REST API
                </abbr>{" "}
                .
              </>
            ),
            links: [
              { text: "Les mer", url: "/portfolio/projects/shoplet/" },
            ],
          },
          {
            textid: 'orderadmin',
            title: "Tilpasset ordresystem & ERP",
            image: e2,
            description:
              "Forbedret UX og optimalisert ERP-integrasjon",
            links: [
              { text: "Les mer", url: "/portfolio/projects/ordreadmin/" },
            ],
          },
          {
            textid: 'PIM',
            title: "PIM i ERP",
            image: e3,
            description:
              "Integrerte PIM for konsistent produktdata på tvers av plattformer.",
            links: [
              { text: "Les mer", url: "/portfolio/projects/PIM/" },
            ],
          },
          {
            textid: 'ERP',
            title: "ERP Videreutvikling & Serveroptimalisering",
            image: e6,
            description:
              "Optimaliserte ytelse, sikkerhet og ERP-nettbutikkintegrasjon.",
            links: [
              { text: "Les mer", url: "/portfolio/projects/epistemeerp/" },
            ],
          },
          {
            textid: 'cafeteria',
            title: "Kantinesystem med ERP",
            image: e5,
            description:
              "Avdelingsbestilling integrert med ERP for effektiv lagerstyring",
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
            textid: 'mobile-first',
            title: "Bootstrap-migrering & responsivt design",
            image: m2,
            description:
              "Automatiserte migrering og forbedret mobil UX.",
            links: [
              {
                text: "Les mer",
                url: "/portfolio/projects/mobilefirst/",
              },
            ],
          },
          {
            textid: 'newscarousel',
            title: "Nyhetskarusell med video",
            image: a7,
            description:
              "Modul med videoavspilling og dynamisk innhold.",
            links: [
              {
                text: "Demo",
                url: "https://alt.moava.org/index.php?pageID=23",
              },
            ],
          },
          {
            textid: 'edtech',
            title: "UI/UX IKTplan.no (2018)",
            image: a14,
            description:
              "Forenklet tilgang til læreplan via brukertesting og UI/UX-forbedringer.",
            links: [
              {
                text: "Les mer",
                url: "/portfolio/projects/iktplan/",
              },
            ],
          },
          {
            textid: 'theme-selector',
            title: "Dynamisk temavelger & fargetilpasning",
            image: a13,
            description:
              "Forenkelt nettside-tilpasning for brukere.",
            links: [
              {
                text: "Les mer",
                url: "/portfolio/projects/themepicker/",
              },
            ],
          },
          {
            textid: 'doublemenu',
            title: "Fleksibel dobbel mobilmeny",
            image: a2,
            description:
              "Responsiv, multi-visning navigasjon.",
            links: [
              {
                text: "Demo og kode",
                url: "https://jsfiddle.net/turbopipp/6qw4075d/",
              },
            ],
          },
          {
            textid: 'edit-optimizing',
            title: "Artikkelredigering effektivisert",
            image: a1,
            description:
              "Fra fem klikk til ett i CMS-redigering.",
            links: [
              { text: "Les mer", url: "/portfolio/projects/nyhetsfelt/" },
            ],
          },
          {
            textid: 'formbuilder',
            title: "GDPR-vennlig drag'n'drop skjemabygger",
            image: m1,
            description:
              "Automatisert sletting av sensitive data.",
            links: [
              { text: "Les mer", url: "/portfolio/projects/skjemabygger/" },
            ],
          },
          {
            textid: 'export',
            title: "Eksport & sammenslåing av skjemadata",
            image: a15,
            description:
              "CSV/XLS eksport med vedleggshåndtering.",
            links: [
              { text: "Les mer", url: "/portfolio/projects/exportresults/" },
            ],
          },
          {
            textid: 'quiz',
            title: "Kundetilfredshetsundersøkelse",
            image: a12,
            description:
              "Utviklet et verktøy for å samle innsikt etter 10 år uten brukerundersøkelser.",
            links: [
              {
                text: "Les mer",
                url: "/portfolio/projects/quiz/",
              },
            ],
          },
          {
            textid: 'tracking',
            title: "Analyse & trafikkoptimalisering",
            image: a11,
            description:
              "Optimaliserte sporing og digital innsikt i CMS.",
            links: [
              { text: "Les mer", url: "/portfolio/projects/userinsight/" },
            ],
          },
        ],
      },
    ],
  },
  {
    category: "Case Studier",
    description: "Selvutvikling innen Perl, PHP, TypeScript, React og React Native.",
    sections: [
      {
        title: "React Native: Mobilapper",
        periodstart: "2024",
        periodend: "2025",
        projects: [
          {
            textid: 'shoppinglist',
            title: "Hierarkiske drag'n'drop-lister",
            image: r5,
            description:
              "Offline-first app med Redux SSOT og Supabase sync.",
            links: [
              { text: "Les mer", url: "/portfolio/projects/shoppinglist/" },
            ],
          },
          {
            textid: 'calculator',
            title: "Avansert kalkulator",
            image: r8,
            description:
              "PEMDAS-støtte, visualisering av uttrykk.",
            links: [
              {
                text: "Les mer",
                url: "/portfolio/projects/calculator/",
              },
            ],
          },
        ],
      },
      {
        title: "React & Next.js",
        periodstart: "2022",
        periodend: "2025",
        projects: [
          {
            textid: 'desktop-dnd',
            title: "Next.js drag'n'drop med pre-drop markør",
            image: r9,
            description: "Dynamiske kolonner med animert drop.",
            links: [
              {
                text: "Demo",
                url: "https://drag-n-drop-desktop.vercel.app/",
              },
              {
                text: "Kode",
                url: "https://github.com/inge1980/drag-n-drop-desktop",
              },
            ],
          },
          {
            textid: 'booking',
            title: "Simulert hotellbookingsystem",
            image: r7,
            description:
              "Validering, automatisk feedback, UX-fokus.",
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
            textid: 'showcase',
            title: "Next.js, React hooks & Tailwind",
            image: r4,
            description: "Eksperimentering med moderne stack.",
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
            textid: 'portfolio',
            title: "Porteføljeside med prosjektoversikt",
            image: r6,
            description:
              "Dynamisk navigasjon, tilpasset design og enhetstester. Denne siden du besøker nå.",
            links: [
              {
                text: "Kode",
                url: "https://github.com/inge1980/portfolio/",
              },
            ],
          },
          {
            textid: 'stackoverflow',
            title: "ChartJS datavisualisering med Stack Overflow API",
            image: r2,
            description:
              "Interaktive kakediagrammer av brukerdata.",
            links: [
              {
                text: "Les mer",
                url: "/portfolio/projects/stackoverflow/",
              },
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
            textid: 'imdb',
            title: "Inge Movie Database (IMDB)",
            image: r1,
            description: "Egendefinert filmindeks med søk.",
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
        title: "PHP/WordPress & JavaScript",
        periodstart: "2012",
        periodend: "2013",
/*         description:
        "Automatiserte nyheter og varsler for lokalbefolkningen via WordPress og RSS.", */
        projects: [
          {
            textid: 'osedalen',
            title: "Automatisert nyhetsfeed",
            image: a8,
            description: "WordPress + RSS for Osedalen.org.",
            links: [
              {
                text: "Les mer",
                url: "/portfolio/projects/osedalen/",
              },
              {
                text: "Demo",
                url: "https://www.osedalen.org/",
              },
            ],
          },
          {
            textid: 'js1k',
            title: "Mini-spill <1024 byte",
            image: a9,
            description:
              "Cupid skyter hjerter, kodeutfordring med plassbegrensning.",
            links: [
              {
                text: "Les mer",
                url: "/portfolio/projects/js1k/",
              },
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
            textid: 'need4sms',
            title: "Søkbart SMS-vitsearkiv i Perl",
            image: a10,
            description:
              "Et av datidens største vitsearkiver i Norge med 10k+ brukere/mnd.",
            links: [
              {
                text: "Les mer",
                url: "/portfolio/projects/need4sms/",
              },
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
