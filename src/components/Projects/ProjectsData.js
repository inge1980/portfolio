import r1 from "../../img/react-movies.png";
import r2 from "../../img/react-stackoverflow.png";
import r4 from "../../img/react-nextjs-hooks.png";
import r5 from "../../img/react-native-shoppinglist.png";
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

import React from "react";

const Projects = [
  {
    id: 1,
    category: "React 2022-2025",
    data: [
      {
        id: 5,
        title: "Handleliste-app i React Native",
        image: r5,
        description: (
          <React.Fragment>
            Her har jeg brukt RNGH 2 med Reanimated 3 for å få til en flytende drag'n'drop handleliste.
          </React.Fragment>
        ),
        readmore: "/portfolio/projects/shoppinglist/",
      },
      {
        id: 3,
        title: "Portfolio lagd i React",
        description: (
          <React.Fragment>
            Dette er siden du besøker nå. En portfolio over ting jeg har lagd,
            og hvilke teknologier jeg har blitt kjent med gjennom sammenlagt 23
            år med programmering.
            <br />
            <br />
            Du se nærmere på koden ved å følge linken nedenfor.
          </React.Fragment>
        ),
        code_link: "https://github.com/inge1980/portfolio/",
      },
      {
        id: 2,
        image: r2,
        title: "Hente stackoverflow-informasjon via API",
        description: (
          <React.Fragment>
            Jeg har gjennom årene vært aktiv på Stackoverflow. Her har jeg laget
            et kakediagram over nøkkelord brukt av min bruker, hentet direkte
            via API. Kan enkelt gjenbrukes av andre ved å endre brukerid.
          </React.Fragment>
        ),
        demo_link: "https://inge1980.github.io/stackoverflow-tags/",
        code_link: "https://github.com/inge1980/stackoverflow-tags/",
      },
      {
        id: 4,
        image: r4,
        title: "Next.js hos vercel, og lek med hooks",
        description: (
          <React.Fragment>
            Litt eksperimentering med Next.js, reponsive TailwindCSS navbar/meny, useLAyoutEffect, useState og custom hooks.
          </React.Fragment>
        ),
        demo_link: "https://showcase-ivory.vercel.app/",
        code_link: "https://github.com/inge1980/showcase/",
      },
      {
        id: 1,
        image: r1,
        title: "Inge Movie DataBase (imdb)",
        description: (
          <React.Fragment>
            Resultatet av et "Mastering React"-kurset jeg tok sommeren 2022.
            <br />
            <br />
            Her er frontend-kunnskap fra kurset samlet og demonstrert i en og samme demo. Du
            kan teste å lage ny, slette eller redigere, men ingenting er lagret
            ved oppdatering av siden.
          </React.Fragment>
        ),
        demo_link: "https://inge1980.github.io/movies/",
        code_link: "https://github.com/inge1980/movies/",
        readmore: "/portfolio/projects/imdb/",
      },
    ],
  },
  {
    id: 4,
    category: "ERP-systemer og nettbutikk 2022-2024",
    data: [
      {
        id: 1,
        title: "Episteme: IIS, PHP, MSSQL, SSMS, Javascript, HTML/CSS",
        description: (
          <React.Fragment>
            Gjennom 2 år med Episteme har jeg vært med på å videreutvikle et&nbsp; 
            <abbr title="Enterprise Resource Planning&#13;Programvare som støtter opp om et flertall av en bedrifts virksomhetsområder,&#13;som ordre, produksjon, lager, salg, innkjøp og økonomi.">ERP</abbr> system, 
            samt redesign av admin frontend fra bunnen. Jeg redesignet også nettbutikken som tar i bruk nevnte ERP. 
            Jeg kan dessverre ikke gi noen kodeeksempler, da noe av dette er eid av Systemhuset Episteme AS, og noe er eid av diverse kunder, 
            men jeg kan vise til noen nettsider som har kommet som resultat av tiden min hos Episteme.
            <br />
            <br />
          </React.Fragment>
        ),
        readmore: "/portfolio/projects/episteme/",
      },
    ],
  },
  {
    id: 2,
    category: "SaaS / CMS for offentlig og private skoler 2013-2022",
    data: [
      {
        id: 1,
        title: "Moava: WAMP, PHP, MySQL, phpMyAdmin, Javascript, HTML/CSS",
        description: (
          <React.Fragment>
            I løpet av 9 år var jeg med på å videreutvikle eget CMS hos Moava som nå
            er i bruk hos omtrent halvparten av skolene i Norge. Jeg redesignet også frontend for et mer moderne utseende og for å støtte mobilvisning. Jeg kan dessverre ikke gi
            noen kodeeksempler, da <abbr title="Software as a service&#13;Skybasert løsning som gir brukere tilgang til programvareapplikasjoner uten behov for å installere eller vedlikeholde programvaren.">SaaS</abbr> produktet er eiendom av Moava AS, men jeg kan
            vise frem noen nettsider hvor dette CMS-et er i bruk. Her er et
            utvalg av skoler i området nær meg.
            <br />
            <br />
          </React.Fragment>
        ),
        readmore: "/portfolio/projects/moava/",
      },
      {
        id: 2,
        image: m1,
        title: "Skjemabygger",
        description:
          "Noe av det siste jeg gjorde hos Moava var å lage en GDPR-vennlig drag'n'drop skjemabygger i deres administrasjonssystem.",
        readmore: "/portfolio/projects/skjemabygger/",
      },
    ],
  },
  {
    id: 3,
    category: "Andre hobbyprosjekter 2001-2025",
    data: [
      {
        id: 1,
        image: a1,
        title: "Legg til artikkel i nyhetsfelt",
        description:
          "Her gjorde jeg det mulig å raskt legge til ny artikkel i nyhetsfelt via modalvindu uten å laste hele siden på nytt. I stedet for å ta omveien innom et administrasjonspanelet, kunne man da redigere direkte via CKEditor, inkludert en knapp for å laste opp filer og en grei forhåndsvisning av artikkelen. Alt på samme plass bare et klikk unna, ned fra tidligere fem klikk.",
        readmore: "/portfolio/projects/nyhetsfelt/",
      },
      {
        id: 2,
        image: a2,
        title: "Bootstrap meny og sidemeny med trestruktur",
        description:
          "Her kan man bruke to menyer samtidig. Perfekt for nettsider med kompleks struktur som vil se bra ut på mobil, eller bare hvis man trenger to separate menyer.",
        //demo_link: "https://jsfiddle.net/turbopipp/6qw4075d/show/",
        demoandcode_link: "https://jsfiddle.net/turbopipp/6qw4075d/",
      },
      {
        id: 3,
        image: a3,
        title: "CSS-lek med størrelsesforhold og skjermbredde",
        description:
          "Her er oppskriften på hvordan man kan beholde størrelsesforhold på videoer selv om bredden på skjermen blir mindre enn bredden på videoen.",
        //demo_link: "https://jsfiddle.net/turbopipp/r1vfekku/show/",
        demoandcode_link: "https://jsfiddle.net/turbopipp/r1vfekku/",
      },
      {
        id: 5,
        image: a5,
        title: "Javascript-lasting av bilder i bakgrunnen",
        description:
          "Dette javascriptet er greit å bruke i tilfeller der man ønsker å laste bilder ferdig før man begynner å vise dem. Man kan f.eks. laste forstørret bilde av et produkt i bakgrunnen før brukeren klikker på forstørrelsesglasset. På den måten kan vi vise siden raskt, og bruke de sekundene før brukeren klikker sitt neste klikk til å laste bilde(r) i bakgrunnen.",
        //demo_link: "https://jsfiddle.net/turbopipp/fdegf1Lh/show/",
        demoandcode_link: "https://jsfiddle.net/turbopipp/fdegf1Lh/",
      },
      {
        id: 6,
        image: a6,
        title: "Bootstrap mappegalleri",
        description:
          "Hvis man har masse bilder strukturert i mapper og undermapper, så kan dette være en grei måte å vise frem strukturen. Ser like bra ut på mobil som på kinolerret.",
        //demo_link: "https://jsfiddle.net/turbopipp/0hsqLner/show",
        demoandcode_link: "https://jsfiddle.net/turbopipp/0hsqLner/",
      },
      {
        id: 7,
        image: a7,
        title: "Bootstrap nyhetskarusell",
        description:
          'Denne nyhetskarusellen er brukt på mange av nettsidene til Norges skoler. Her kan administrator velge størrelsesforhold på en visningsrute og velge om å "holde bildet innenfor ruten" eller "la bildet fylle ruten". Dette gjør at det fungerer like greit på både kinoskjermer og mobil uansett størrelsesforhold på bildet.',
        demo_link: "https://alt.moava.org/index.php?pageID=23",
      },
      {
        id: 8,
        image: a8,
        title: "Nyhetsfeed fra 2013 - Osedalen.org",
        description:
          "En wordpress-side hvor jeg aggregerte nyheter fra forskjellige kilder. Alt jeg trengte å gjøre var å godkjenne artikler som ble generert automatisk. Startet i 2013, og overlatt til seg selv av og til, og siste oppdatert i 2018.",
        demo_link: "https://www.osedalen.org/",
      },
      {
        id: 9,
        image: a9,
        title: "Konkurranse i 2012: Javascript-spill på under 1024 byte",
        description:
          'Tilbake i 2012 før Valentines prøvde jeg meg i en konkurranse for å lage et primitivt javascript-spill på under 1 kilobyte. Jeg vant ikke, men det var gøy å lære litt om hvordan canvas fungerte. I spillet er poeng til venstre, og antall liv til høyre, og "Cupid" skulle prøve å treffe så mange hjerter som mulig før de fryser til is. Beregnet kun for pc, og pilen følger musepekeren.',
        demo_link: "https://js1k.com/2012-love/demo/1269/",
        code_link: "https://js1k.com/2012-love/details/1269/",
        //readmore: "/portfolio/projects/js1k",
      },
      {
        id: 10,
        image: a10,
        title: "Søkbart arkiv over sms-vitser",
        description:
          "I perioden før MMS ble populært, lagde jeg og drev denne nettsiden fra 2001-2003. På den tiden var det SMS-vitser og “Dynamiske SMS” som gjaldt. Det var over 10 000 unike besøkende innom hver måned, og på den tiden et av Norges største gratis søkbare sms-arkiv med over 1100 kategoriserte vitser, flørter og dynamiske SMS. Besøkende sendte inn forslag, og alt jeg trengte å gjøre i adminpanelet var å evt. redigere og godkjenne før publisering. Nettsiden er ikke mer, men en auto-kopi fra 2003 finnes i “Internet Archive WayBackMachine”.",
        demo_link:
          "https://web.archive.org/web/20030608184834/http://www.need4sms.com/",
      },
    ],
  },
];

export default Projects;
