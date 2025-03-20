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
    id: 1,
    category: "React og React Native 2022-2025",
    data: [
      {
        id: 5,
        title: "Mobil app i React Native",
        image: r5,
        description: (
          <React.Fragment>
            Her har jeg brukt <abbr title="React Native Gesture Handler (versjon 2.x)&#13;Bibliotek for å forenkle måten man får tilgang til plattformens egne berørings- og bevegelsessystem.">RNGH 2</abbr> med <abbr title="React Native Reanimated (versjon 3.x)&#13;Animasjonsbibliotek for å lage animasjoner via UI-tråden.&#13;(i motsetning til JS-tråden som kan forårsake forsinkelser eller hakking)">Reanimated 3</abbr> for 
            å få til en jevn drag'n'drop animasjon uten potensiell hakking.
          </React.Fragment>
        ),
        readmore: "/portfolio/projects/shoppinglist/",
      },
      {
        id: 3,
        image: r6,
        title: "Portfolio",
        description: (
          <React.Fragment>
            Denne siden du besøker nå. En portfolio over ting jeg har lagd,
            og hvilke teknologier jeg har blitt kjent med gjennom sammenlagt 23
            år med programmering. Du kan se nærmere på koden ved å følge linken nedenfor.
          </React.Fragment>
        ),
        code_link: "https://github.com/inge1980/portfolio/",
      },
      {
        id: 2,
        image: r2,
        title: "Stackoverflow-API til kakediagram",
        description: (
          <React.Fragment>
            Jeg har gjennom årene vært aktiv på Stackoverflow. Kakediagram over de mest brukte nøkkelordene til min bruker, hentet direkte
            via API, som enkelt kan gjenbrukes av andre ved å endre brukerid.
          </React.Fragment>
        ),
        demo_link: "https://inge1980.github.io/stackoverflow-tags/",
        code_link: "https://github.com/inge1980/stackoverflow-tags/",
      },
      {
        id: 6,
        image: r7,
        title: "Hotell booking",
        description: (
          <React.Fragment>
            Booking-modul bygd på Next.js og Material UI med fokus på validering av feltene.
          </React.Fragment>
        ),
        demo_link: "https://hotel-booking-case-2024-improved.vercel.app/",
        code_link: "https://github.com/inge1980/hotel_booking_case_2024_improved",
      },
      {
        id: 4,
        image: r4,
        title: "Next.js hos vercel, og lek med hooks",
        description: (
          <React.Fragment>
            Min første titt på Next.js og reponsive TailwindCSS navbar/meny. Og litt demonstrasjon av useLAyoutEffect, useState og custom hooks.
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
            Her er frontend-kunnskapen fra "Mastering React"-kurset jeg tok sommeren 2022 samlet og demonstrert i en og samme nettside.
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
            Gjennom 2 år med Episteme har jeg videreutviklet et&nbsp; 
            <abbr title="Enterprise Resource Planning&#13;Programvare som støtter opp om et flertall av en bedrifts virksomhetsområder,&#13;som ordre, produksjon, lager, salg, innkjøp og økonomi.">ERP</abbr> system, 
            samt utviklet diverse administrasjonssystemer fra bunnen. Jeg redesignet også nettbutikken som tar i bruk nevnte ERP.
            <br />
          </React.Fragment>
        ),
        readmore: "/portfolio/projects/episteme/",
      },
      {
        id: 2,
        image: e1,
        title: "Nettbutikk",
        description:
          "Nettbutikk og REST API for et cateringselskap.",
        readmore: "/portfolio/projects/shoplet/",
      },
      {
        id: 3,
        image: e2,
        title: "Ordreadministrasjon",
        description: (
          <React.Fragment>
            Skilte ut eget ordresystem til et ordrekontor, fra et eksisterende&nbsp;
            <abbr title="Enterprise Resource Planning&#13;Programvare som støtter opp om et flertall av en bedrifts virksomhetsområder,&#13;som ordre, produksjon, lager, salg, innkjøp og økonomi.">ERP</abbr>-system.
            <br />
            <br />
          </React.Fragment>
        ),
        readmore: "/portfolio/projects/ordreadmin/",
      },
      {
        id: 4,
        image: e3,
        title: "PIM",
        description: (
          <React.Fragment>
            Videreutviklet et&nbsp;
            <abbr title="Enterprise Resource Planning&#13;Programvare som støtter opp om et flertall av en bedrifts virksomhetsområder,&#13;som ordre, produksjon, lager, salg, innkjøp og økonomi.">ERP</abbr>-system til et&nbsp;
            <abbr title="Product Information Management&#13;Sentral håndtering av produktinformasjon for nettbutikker, ERP-systemer, trykte kataloger og mer.">PIM</abbr>-system.
            <br />
            <br />
          </React.Fragment>
        ),
        readmore: "/portfolio/projects/PIM/",
      },
      {
        id: 5,
        image: e4,
        title: "Kantine",
        description: (
          <React.Fragment>
            Kantinesystem med mulighet for flere avdelinger hvor ledere kan legge til brukere og bestille for hele avdelingen,
            og enkeltbrukere kunne bestille mat for seg selv.
            <br />
            <br />
          </React.Fragment>
        ),
        readmore: "/portfolio/projects/kantine/",
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
            I løpet av 9 år var jeg med på å videreutvikle eget <abbr title="Content Management System&#13;System som lar deg opprette og redigere innhold på nettsider, intranett og nettbutikker.">CMS</abbr> hos Moava AS, 
            som den gang var i bruk hos omtrent halvparten av skolene i Norge. Jeg redesignet også frontend til et mer moderne utseende og for å støtte mobilvisning.
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
          "Noe av det siste jeg gjorde som ansatt i Moava AS var å kode en GDPR-vennlig drag'n'drop skjemabygger til deres administrasjonssystem.",
        readmore: "/portfolio/projects/skjemabygger/",
      },
      {
        id: 3,
        image: a1,
        title: "Legg til artikkel i nyhetsfelt",
        description:
          "Her effektiviserte jeg redigering av nyhetsfelt modulen i et administrasjonssystem. Tilgjengelig bare et klikk unna, ned fra tidligere fem klikk.",
        readmore: "/portfolio/projects/nyhetsfelt/",
      },
      {
        id: 4,
        image: a7,
        title: "Bootstrap nyhetskarusell",
        description:
          'Nyhetskarusell som er brukt på mange av nettsidene til Norges skoler. Funksjonell på både mobil og pc uansett størrelsesforhold på bildet.',
        demo_link: "https://alt.moava.org/index.php?pageID=23",
      },
    ],
  },
  {
    id: 3,
    category: "Diverse eldre hobbyprosjekter 2001-2018",
    data: [
      {
        id: 2,
        image: a2,
        title: "2x mobilmenyer",
        description:
          'Sidemeny med trestruktur, og en vanlig Bootstrap "hamburger"-meny samtidig. Kompleks struktur i menyer som også ser bra ut på mobil.',
        //demo_link: "https://jsfiddle.net/turbopipp/6qw4075d/show/",
        demoandcode_link: "https://jsfiddle.net/turbopipp/6qw4075d/",
      },
      {
        id: 3,
        image: a3,
        title: "Størrelsesforhold og skjermbredde",
        description:
          "Hvordan beholde størrelsesforhold på videoer selv om bredden på skjermen endres.",
        //demo_link: "https://jsfiddle.net/turbopipp/r1vfekku/show/",
        demoandcode_link: "https://jsfiddle.net/turbopipp/r1vfekku/",
      },
      {
        id: 5,
        image: a5,
        title: "Javascript-lasting av bilder i bakgrunnen",
        description:
          'Javascript-eksempel av "preloading", i de tilfellene hvor man ønsker å laste bilder ferdig i bakgrunnen før man begynner å vise dem. Nyttig om man f.eks. har bilder man vet straks skal vises, og vil spare brukeren for verdifulle sekunder ved sitt neste klikk.',
        //demo_link: "https://jsfiddle.net/turbopipp/fdegf1Lh/show/",
        demoandcode_link: "https://jsfiddle.net/turbopipp/fdegf1Lh/",
      },
      {
        id: 6,
        image: a6,
        title: "Bootstrap mappegalleri",
        description:
          "Oversiktlig visning av bilder i mapper og undermapper. Fungerer like bra på mobil som på kinolerret.",
        //demo_link: "https://jsfiddle.net/turbopipp/0hsqLner/show",
        demoandcode_link: "https://jsfiddle.net/turbopipp/0hsqLner/",
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
          'Javascript konkurranse for å lage et primitivt javascript-spill på under 1 kilobyte i 2012. I spillet er poeng til venstre, og antall liv til høyre, og "Cupid" skulle prøve å treffe så mange hjerter som mulig før de fryser til is. Beregnet kun for pc, og pilen følger musepekeren.',
        demo_link: "https://js1k.com/2012-love/demo/1269/",
        code_link: "https://js1k.com/2012-love/details/1269/",
        //readmore: "/portfolio/projects/js1k",
      },
      {
        id: 10,
        image: a10,
        title: "Søkbart arkiv over sms-vitser",
        description:
          "I perioden før MMS ble populært, lagde jeg og drev denne nettsiden fra 2001-2004. På den tiden hadde siden over 10 000 unike besøkende innom hver måned, og var et av Norges største gratis søkbare sms-arkiv med over 1100 kategoriserte vitser, flørter og dynamiske SMS. Besøkende sendte inn forslag, og jeg godkjente via et adminpanel. Nettsiden finnes ikke mer, men en auto-kopi fra 2004 finnes i “Internet Archive WayBackMachine”.",
        demo_link:
          "https://web.archive.org/web/20040526200014/http://need4sms.com:80/",
      },
    ],
  },
];

export default Projects;
