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
    category: "Professional Experience",
    sections: [
      {
        company: "Episteme AS",
        role: "Fullstack & Frontend Developer",
        periodstart: "2022",
        periodend: "2025",
        description:
          "Developed and modernized ERP, e-commerce and integrated business systems",
        projects: [
          {
            textid: 'webshop',
            title: "Mobile Webshop & REST API",
            image: e1,
            description: (
              <>
                Modernized the webshop with responsive UX, allergen filtering, user login, favorites and dynamic pricing, while replacing direct ERP access with a{" "}
                <abbr title="REST API (also known as RESTful API or RESTful Web API)">
                  REST API
                </abbr>{" "}
                .
              </>
            ),
            links: [
              { type: "readmore", text: "Read more", url: "/portfolio/projects/shoplet/" },
            ],
          },
          {
            textid: 'orderadmin',
            title: "Custom Order System & ERP",
            image: e2,
            description:
              "Extracted an order office system from ERP with a simplified, role-based UI.",
            links: [
              { type: "readmore", text: "Read more", url: "/portfolio/projects/ordreadmin/" },
            ],
          },
          {
            textid: 'PIM',
            title: "PIM in ERP",
            image: e3,
            description:
              "Built PIM in ERP as a central product source for the webshop via REST API.",
            links: [
              { type: "readmore", text: "Read more", url: "/portfolio/projects/PIM/" },
            ],
          },
          {
            textid: 'ERP',
            title: "ERP Development & Production Infrastructure",
            image: e6,
            description:
              "Modernized ERP functionality, production infrastructure, database performance and system integrations.",
            links: [
              { type: "readmore", text: "Read more", url: "/portfolio/projects/epistemeerp/" },
            ],
          },
          {
            textid: 'cafeteria',
            title: "Canteen Management System & ERP",
            image: e5,
            description:
              "Built role-based ordering for multiple departments with ERP inventory integration.",
            links: [
              { type: "readmore", text: "Read more", url: "/portfolio/projects/kantine/" },
            ],
          },
        ],
      },
      {
        company: "Moava AS",
        role: "Fullstack Developer",
        periodstart: "2013",
        periodend: "2022",
        description:
          "Developed and modernized a large-scale SaaS CMS across architecture, UX, data and performance",
        projects: [
          {
            textid: 'mobile-first',
            title: "Responsive Bootstrap Modernization",
            image: m2,
            description:
              "Modernized 20+ CMS modules and migrated ~1,300 school websites to a responsive frontend with progressive rollout and automated legacy configuration conversion.",
            links: [
              {
                text: "Read more",
                url: "/portfolio/projects/mobilefirst/",
              },
            ],
          },
          {
            textid: 'newscarousel',
            title: "Dynamic News Article Carousel",
            image: a7,
            description:
              "Transformed a news article module into a dynamic carousel supporting articles with both image and video content, including autoplay and modal article viewing.",
            links: [
              {
                text: "Demo",
                url: "https://alt.moava.org/index.php?pageID=23",
              },
            ],
          },
          {
            textid: 'edtech',
            title: "IKTplan.no - UX Modernization",
            image: a14,
            description:
              "Improved navigation and usability of IKTplan.no, a digital skills resource for teachers, through user testing and frontend optimization in collaboration with the Norwegian Directorate for Education and Training.",
            links: [
              {
                text: "Read more",
                url: "/portfolio/projects/iktplan/",
              },
            ],
          },
          {
            textid: 'theme-selector',
            title: "Dynamic Theme Picker & Color Customization",
            image: a13,
            description:
              "Made website customization more accessible through dynamic theme and color configuration.",
            links: [
              {
                text: "Read more",
                url: "/portfolio/projects/themepicker/",
              },
            ],
          },
          {
            textid: 'doublemenu',
            title: "Flexible Double Mobile Menu",
            image: a2,
            description:
              "Built responsive multi-view navigation optimized for mobile interaction.",
            links: [
              {
                text: "Demo & Code",
                url: "https://jsfiddle.net/turbopipp/6qw4075d/",
              },
            ],
          },
          {
            textid: 'edit-optimizing',
            title: "Optimizing Article Editing",
            image: a1,
            description:
              "Introduced inline editing and reduced a common CMS workflow from five clicks to one.",
            links: [
              { type: "readmore", text: "Read more", url: "/portfolio/projects/nyhetsfelt/" },
            ],
          },
          {
            textid: 'formbuilder',
            title: "GDPR-Compliant Form Builder",
            image: m1,
            description:
              "Built dynamic form management with role-based editing, automated data retention, S3 file lifecycle management and data exports.",
            links: [
              { type: "readmore", text: "Read more", url: "/portfolio/projects/skjemabygger/" },
            ],
          },
          {
            textid: 'export',
            title: "Export & Merge Form Data",
            image: a15,
            description:
              "Built CSV/XLS exports with attachment handling and optimized spreadsheet generation.",
            links: [
              { type: "readmore", text: "Read more", url: "/portfolio/projects/exportresults/" },
            ],
          },
          {
            textid: 'quiz',
            title: "Customer Satisfaction Survey",
            image: a12,
            description:
              "Introduced customer feedback collection after a decade without structured user surveys.",
            links: [
              {
                text: "Read more",
                url: "/portfolio/projects/quiz/",
              },
            ],
          },
          {
            textid: 'tracking',
            title: "Analytics & Traffic Optimization",
            image: a11,
            description:
              "Improved CMS analytics, tracking and visibility into website usage.",
            links: [
              { type: "readmore", text: "Read more", url: "/portfolio/projects/userinsight/" },
            ],
          },
        ],
      },
    ],
  },
  {
    category: "Case Studies",
    description: "Self-development in Perl, PHP, TypeScript, React and React Native.",
    sections: [
      {
        title: "React Native: Mobile Apps",
        periodstart: "2024",
        periodend: "2025",
        projects: [
          {
            textid: 'shoppinglist',
            title: "Hierarchical Drag'n'Drop Lists",
            image: r5,
            description:
              "Built an offline-first app for hierarchical lists with Redux SSOT, SQLite local storage and Supabase cloud sync.",
            links: [
              { type: "readmore", text: "Read more", url: "/portfolio/projects/shoppinglist/" },
            ],
          },
          {
            textid: 'calculator',
            title: "PEMDAS Calculator",
            image: r8,
            description:
              "Built a React Native calculator supporting complex mathematical expressions with intuitive input and Google Mobile Ads integration.",
            links: [
              {
                text: "Read more",
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
            title: "Next.js Drag'n'Drop with Pre-Drop Indicator",
            image: r9,
            description: "Dynamic columns with animated drop.",
            links: [
              {
                text: "Demo",
                url: "https://drag-n-drop-desktop.vercel.app/",
              },
              {
                text: "Code",
                url: "https://github.com/inge1980/drag-n-drop-desktop",
              },
            ],
          },
          {
            textid: 'booking',
            title: "Simulated Hotel Booking System",
            image: r7,
            description:
              "Validation, instant feedback, UX-focused.",
            links: [
              {
                text: "Demo",
                url: "https://hotel-booking-case-2024-improved.vercel.app/",
              },
              {
                text: "Code",
                url: "https://github.com/inge1980/hotel_booking_case_2024_improved",
              },
            ],
          },
          {
            textid: 'showcase',
            title: "Next.js, React Hooks & Tailwind",
            image: r4,
            description: "Experimenting with a modern stack, server-side rendering and performance optimization",
            links: [
              {
                text: "Demo",
                url: "https://showcase-ivory.vercel.app/",
              },
              {
                text: "Code",
                url: "https://github.com/inge1980/showcase/",
              },
            ],
          },
          {
            textid: 'portfolio',
            title: "Portfolio Site with Project Overview",
            image: r6,
            description:
              "Dynamic navigation, custom design and unit tests. The page you're on now.",
            links: [
              {
                text: "Code",
                url: "https://github.com/inge1980/portfolio/",
              },
            ],
          },
          {
            textid: 'stackoverflow',
            title: "ChartJS Data Visualization with Stack Overflow API",
            image: r2,
            description:
              "Interactive pie charts of user data.",
            links: [
              {
                text: "Read more",
                url: "/portfolio/projects/stackoverflow/",
              },
              {
                text: "Demo",
                url: "https://inge1980.github.io/stackoverflow-tags/",
              },
              {
                text: "Code",
                url: "https://github.com/inge1980/stackoverflow-tags/",
              },
            ],
          },
          {
            textid: 'imdb',
            title: "Inge Movie Database (IMDB)",
            image: r1,
            description: "Custom movie index with search.",
            links: [
              { type: "readmore", text: "Read more", url: "/portfolio/projects/imdb/" },
              {
                text: "Demo",
                url: "https://inge1980.github.io/movies/",
              },
              {
                text: "Code",
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
        "Automated news and alerts for the local community through WordPress and RSS.", */
        projects: [
          {
            textid: 'osedalen',
            title: "Automated News Feed",
            image: a8,
            description: "WordPress + RSS for Osedalen.org.",
            links: [
              {
                text: "Read more",
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
            title: "Mini Game <1024 Bytes",
            image: a9,
            description:
              "Cupid shoots hearts, a code challenge with a space limit.",
            links: [
              {
                text: "Read more",
                url: "/portfolio/projects/js1k/",
              },
              {
                text: "Demo",
                url: "https://js1k.com/2012-love/demo/1269/",
              },
              {
                text: "Code",
                url: "https://js1k.com/2012-love/details/1269/",
              },
            ],
          },
        ],
      },
      {
        title: "Perl: Web Development",
        periodstart: "2001",
        periodend: "2003",
        projects: [
          {
            textid: 'need4sms',
            title: "Searchable SMS Joke Archive in Perl",
            image: a10,
            description:
              "Built a searchable CMS and archive with 1,100+ categorized jokes and 10k+ monthly users.",
            links: [
              {
                text: "Read more",
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