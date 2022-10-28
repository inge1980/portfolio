import r1 from "../../img/react-movies.png";
import r2 from "../../img/react-stackoverflow.png";
import r3 from "../../img/react-portfolio.png";
import a1 from "../../img/php-bootstrap-modal-ckeditor-inline-edit-news-field.png";
import a2 from "../../img/bootstrap-double-menu.png";
import a3 from "../../img/bootstrap-aspect-ratio.png";
import a4 from "../../img/jquery-ui-sliding-tickets.png";
import a5 from "../../img/javascript-preload-images.png";
import a6 from "../../img/bootstrap-thumbnail-gallery.png";
import a7 from "../../img/bootstrap-news-carousel.png";
import a9 from "../../img/javascript-1016-byte-game.png";
import a10 from "../../img/perl-cgi-collection-of-jokes-need4sms.png";

const Projects = [
  {
    id: 1,
    category: "React prosjekt",
    data: [
      {
        id: 1,
        image: r3,
        title: "Portfolio lagd i React",
        description:
          "Denne siden, en portfolio over ting jeg har lagd, og hvilke teknologier jeg er kjent med.",
        demo_link: "https://inge1980.github.io/portfolio/",
        code_link: "https://github.com/inge1980/portfolio/",
      },
      {
        id: 2,
        image: r2,
        title: "Hente stackoverflow-informasjon via API",
        description:
          "Kakediagram over nøkkelord brukt av en spesifikk Stackoverflow-bruker, i dette tilfellet meg. :)",
        demo_link: "https://inge1980.github.io/stackoverflow-tags/",
        code_link: "https://github.com/inge1980/stackoverflow-tags/",
      },
      {
        id: 3,
        image: r1,
        title: "Inge Movie DataBase (imdb)",
        description:
          'Resultatet av "Mastering React"-kurset jeg tok sommeren 2022.',
        demo_link: "https://inge1980.github.io/movies/",
        code_link: "https://github.com/inge1980/movies/",
        //readmore: "/portfolio",
      },
    ],
  },
  {
    id: 2,
    category: "Andre prosjekt",
    data: [
      {
        id: 1,
        image: a1,
        title: "Legg til artikkel i nyhetsfelt",
        description:
          "Her gjorde jeg det mulig å raskt legge til ny artikkel i nyhetsfelt via modalvindu uten å laste hele siden på nytt, i stedet for å ta omveien innom et administrasjonspanelet. Redigere direkte via CKEditor, og en knapp for å laste opp filer, og en grei forhåndsvisning av artikkelen. Alt på samme plass bare et klikk unna.",
        demo_link: "https://inge.moavademo.no/index.php?pageID=13",
      },
      {
        id: 2,
        image: a2,
        title: "Bootstrap meny og sidemeny med trestruktur",
        description:
          "Her kan man bruke to menyer samtidig. Perfekt for nettsider med kompleks struktur som vil se bra ut på mobil.",
        demo_link: "https://jsfiddle.net/turbopipp/6qw4075d/show/",
        code_link: "https://jsfiddle.net/turbopipp/6qw4075d/",
      },
      {
        id: 3,
        image: a3,
        title: "CSS-lek med størrelsesforhold og skjermbredde",
        description:
          "Her er oppskriften på hvordan man kan beholde størrelsesforhold på videoer selv om bredden på skjermen blir mindre enn bredden på videoen.",
        demo_link: "https://jsfiddle.net/turbopipp/r1vfekku/show/",
        code_link: "https://jsfiddle.net/turbopipp/r1vfekku/",
      },
      {
        id: 4,
        image: a4,
        title: "jQuery-UI test av slider og litt matte",
        description:
          "Slideren til jQuery-UI er nytting å bruke f.eks. i innstillinger når man skal få brukeren til å velge innenfor et bestemt område",
        demo_link: "https://jsfiddle.net/turbopipp/vLg1nvss/show/",
        code_link: "https://jsfiddle.net/turbopipp/vLg1nvss/",
      },
      {
        id: 5,
        image: a5,
        title: "Javascript-lasting av bilder i bakgrunnen",
        description:
          "I tilfeller der man ønsker å laste bilder ferdig før man begynner å vise dem, er dette javascriptet greit å bruke.",
        demo_link: "https://jsfiddle.net/turbopipp/fdegf1Lh/show/",
        code_link: "https://jsfiddle.net/turbopipp/fdegf1Lh/",
      },
      {
        id: 6,
        image: a6,
        title: "Bootstrap mappegalleri",
        description:
          "Hvis man har masse bilder strukturert i mapper, så kan dette være en grei måte å vise dem frem. Ser like bra ut på mobil som på kinolerret.",
        demo_link: "https://jsfiddle.net/turbopipp/0hsqLner/show",
        code_link: "https://jsfiddle.net/turbopipp/0hsqLner/",
      },
      {
        id: 7,
        image: a7,
        title: "Bootstrap nyhetskarusell",
        description:
          'Denne nyhetskarusellen er brukt på mange av nettsidene til Norges skoler. Her kan administrator velge størrelsesforhold på en visningsrute og velge om å "holde bildet innenfor ruten" eller "la bildet fylle ruten". Dette gjør at det fungerer like greit på både kinoskjermer og mobil uansett størrelsesforhold på bildet.',
        demo_link: "https://inge.moavademo.no/index.php?pageID=8",
      },
      {
        id: 9,
        image: a9,
        title: "Konkurranse i 2012: Javascript-spill på under 1024 byte",
        description:
          'Tilbake i 2012 rundt Valentines prøvde jeg meg i en konkurranse for å lage et primitivt javascript-spill på under 1 kilobyte. Jeg vant ikke, men det var gøy å lære litt om hvordan canvas fungerte. I spillet er poeng til venstre, og antall liv til høyre, og "Cupid" skulle prøve å treffe så mange hjerter som mulig før de fryser til is.',
        demo_link: "https://js1k.com/2012-love/demo/1269/",
        code_link: "https://js1k.com/2012-love/details/1269/",
        //readmore: "/js1k",
      },
      {
        id: 10,
        image: a10,
        title: "Søkbart arkiv over sms-vitser",
        description:
          "I perioden før MMS ble populært, drev jeg denne nettsiden fra 2001-2003. På den tiden var det SMS-vitser og “Dynamiske SMS” som gjaldt. Det var over 10 000 unike besøkende innom hver måned, og på den tiden et av Norges største gratis søkbare sms-arkiv med over 1100 kategoriserte vitser, flørter og dynamiske SMS.",
        demo_link:
          "https://web.archive.org/web/20030608184834/http://www.need4sms.com/",
      },
    ],
  },
];

export default Projects;
