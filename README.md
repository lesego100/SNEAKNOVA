SneakNova – Premium Sneaker Retail Website

Student Information
Student Name: Lesego Malesa
Student Number: ST10513801
Course: Diploma in IT (Software Development)
Subject: Web Development
Subject Code: WEDE5020
Year: 2026

Project Overview
SneakNova is a fictional premium sneaker retail organisation created as part of a Web Development project. The website gives customers a simple and engaging way to explore different sneaker brands and styles in one place.

The website focuses on popular sneaker brands such as Nike, Adidas, Puma, New Balance, Converse, Air Jordan and Vans. It provides information about the organisation, displays sneaker products and images, lets customers search and filter products, and allows customers to send product enquiries and general messages through validated forms.

The website was built in three stages: Part 1 created the HTML structure and content, Part 2 added CSS styling and responsive design, and Part 3 added JavaScript functionality, SEO, working forms and deployment.

Website Goals and Objectives
The main goal of the SneakNova website is to create a user-friendly online presence for a fictional sneaker retail store.

The website aims to:
Provide information about SneakNova.
Display different sneaker brands and products.
Allow visitors to view sneaker images and prices.
Provide an online gallery of sneaker styles.
Make it easy for customers to find contact information.
Allow customers to make product enquiries and receive a price and availability response.
Let visitors search, filter and sort products.
Provide simple and clear navigation between website pages.
Work well on desktop, tablet and mobile devices.

Key Features and Functionality
Home Page – Introduces SneakNova with a promotional video, brands, new arrivals and a welcome spin-the-wheel reward.
About Us Page – Tells SneakNova's story, mission, vision and values.
Products Page – Displays sneakers, brands and prices with live search, brand filter and sorting.
Gallery Page – Displays sneaker images with a lightbox viewer.
Enquiry Page – A validated enquiry form that responds with a price, delivery fee, estimated total and size availability.
Contact Us Page – Contact details, Google Maps for each location, and a validated contact form that prepares an email.
Navigation Menu – Navigation between all pages.
Responsive Design – Layouts adapt to tablet and mobile screens.

Timeline and Milestones
The project will be developed according to the submission dates and milestones provided for the Web Development module.

Milestones
Proposal - Select organisation and plan the website
Part 1 - Create basic HTML website structure and content
Part 1 - Testing	Test navigation, images, video and HTML pages
Part 2 - Add CSS styling and responsive design
Part 2 - Testing	Test the layout at desktop, tablet and mobile sizes
Part 3 - Add JavaScript functionality, SEO, forms and deployment
Part 3 - Testing	Test forms, interactive features and the live website

Part 1 Details
Part 1 focuses on creating the basic structure and content of the SneakNova website using HTML.

The following were included:
Created six HTML pages.
Added a header and navigation menu.
Added headings and paragraphs.
Added product and gallery images.
Added a promotional video to the homepage.
Added links between the different pages.
Added comments to explain sections of the HTML code.
Organised website images inside an IMAGES folder.
Created a GitHub repository for the project.
Tested the website pages and navigation.

Part 2 Details
Part 2 added CSS styling and responsive design.

The following were included:
Created an external stylesheet (style.css) linked to all six pages, with a CSS reset.
Added a colour palette, Google Fonts, CSS variables and responsive typography.
Used Flexbox and CSS Grid for the navigation, products, gallery, contact and brand sections.
Added visual styling: shadows, rounded corners, hover and focus effects, and a styled header and footer.
Added responsive breakpoints for tablet and mobile and used relative units (rem, em, %).
Added responsive image attributes (srcset and sizes).
Tested at desktop, tablet and mobile sizes using browser DevTools.

Part 3 Details

Part 3 added JavaScript functionality, search engine optimisation (SEO), working forms with validation, and deployment.

JavaScript Enhancements
Feature : Gallery lightbox	
Page : gallery.html	
File : JS/lightbox.js	
Description : Clicking an image opens a larger view with next/previous buttons, a caption, and keyboard support (arrow keys and Esc).

Feature : Interactive maps	
Page : contact.html	
File : HTML embed	
Description : Google Maps embeds for the Johannesburg and Pretoria locations that visitors can zoom and drag.

Feature : Product search, filter and sort	
Page : products.html	
File : JS/products.js	
Description : Live search by name or brand, a brand filter, sorting by price or name, a results counter and a "no results" message.

Feature : Spin-the-wheel reward	
Page : index.html	
File : JS/wheel.js	
Description : New customers spin a wheel for a welcome reward (discounts, free shipping, a cup, a SPRAYGROUND backpack or 2 Gold Reef City tickets). The result is saved with localStorage so each browser spins once, and each prize has its own reward code.

Feature : Animations and transitions	
Page : All pages	
File : style.css	
Description : Hover effects, the lightbox fade-in and the spinning wheel transition.

Forms and Validation
Enquiry form (enquiry.html): text, email, phone, dropdown, number, date, radio, checkbox and textarea fields. JavaScript validates every field (South African phone numbers, email format, quantity range, dates not in the past, message length) and shows an error under each invalid field. After a valid submission the page responds with an enquiry reference number, the price, delivery fee, estimated total, and whether the chosen size is in stock.

Contact form (contact.html): name, email, optional phone, message type and message, with the same validation. After validation the information is compiled into an email (recipient, subject and body shown in a preview) and the customer sends it with one click using a mailto: link. The code also supports AJAX sending through Formspree if an endpoint is added.

Form content is inserted into the page as text only (never as HTML) to protect against script injection.

Search Engine Optimisation (SEO)
Title tags: every page has a unique, descriptive title that includes relevant keywords.

Meta descriptions and keywords: every page has its own meta description and keywords, plus a meta author and the viewport tag for mobile-friendliness.

Header tags: each page has one h1, with h2 and h3 used to structure the content.

Image optimisation: descriptive alt text and hyphenated, descriptive file names.

URL structure: the home page was renamed from home.html to index.html so it loads at the root of the site; file names are short, lowercase and descriptive.

Internal linking: every page links to every other page through the navigation, and products link to the enquiry page.

robots.txt and sitemap.xml: added to the root of the repository so search engines can crawl all six pages.

Page speed: the Google Fonts @import was moved to the top of style.css, scripts use the defer attribute so they do not block the page, and the map iframes use loading="lazy".

Security: user input is validated on the client and inserted as text only; no API keys or secrets are stored in the code.

Sitemap
The website consists of the following pages:
                      INDEX (Home)
                           |
     +----------+----------+----------+-----------+
     |          |          |          |           |
 ABOUT US   PRODUCTS    GALLERY    ENQUIRY   CONTACT US

Website Pages
Home – index.html
About Us – about.html
Products – products.html
Gallery – gallery.html
Enquiry – enquiry.html
Contact Us – contact.html

The supporting files include: style.css, JS/ (forms.js, lightbox.js, products.js, countdown.js, wheel.js), IMAGES/, robots.txt, sitemap.xml.

Changelog
Version 1.0 – Initial Part 1 Development
Created the initial SneakNova website structure.
Created six HTML pages.
Added navigation links between pages.
Added SneakNova logo.
Added homepage promotional video.
Added sneaker product images.
Added gallery images.
Added product names and prices.
Added About Us content.
Added enquiry information.
Added contact information.
Created the IMAGES folder.
Created the GitHub repository.

Version 2.0 – Part 2: CSS Styling and Responsive Design
Corrected Part 1 feedback by adding the missing <title> tag to products.html.
Created and linked an external style.css stylesheet to all six HTML pages, including a CSS reset.
Added a consistent colour palette, Google Fonts, CSS variables and responsive typography.
Improved page layouts using Flexbox and CSS Grid for navigation, products, gallery, contact information and brand sections.
Corrected layout and navigation CSS issues that were causing incorrect stacking and overriding Flexbox.
Added visual styling such as shadows, rounded corners, hover/focus effects, navigation underlines, and styled header and footer sections.
Updated the homepage hero video with autoplay, muted, loop and playsinline settings and removed visible controls.
Added responsive breakpoints for tablet and mobile devices.
Replaced fixed pixel measurements with flexible units such as rem, em and %.
Added responsive image support using srcset and sizes.
Tested the website at desktop, tablet and mobile screen sizes using browser DevTools and resolved a caching issue with a hard refresh.

Version 3.0 – Part 3: Enhancing Functionality and SEO
Feedback corrections from Part 2

Reviewed the Part 2 marks and feedback. The main improvement area was the reference list.
Merged the two reference lists, which contained the same Part 1 sources twice, into one list.
Converted the references to a single consistent Harvard style, because the list previously mixed two different styles.
Fixed entries that had run together on one line, entries with no author or title, and missing access dates.
Removed a tracking parameter from the Nike URL.
Added references for the fonts, maps, hosting platform, images and tools used in Parts 2 and 3.

SEO
Added unique title tags, meta descriptions and meta keywords to all six pages.
Added the viewport meta tag, meta charset and meta author to every page.
Added alt text to the navigation logo, footer image, brand logos and product images.
Renamed image files to descriptive hyphenated names and updated every reference to them.
Renamed home.html to index.html and updated the Home link on every page.
Added robots.txt and sitemap.xml.

Forms
Added a full enquiry form to enquiry.html with text, email, tel, select, number, date, radio, checkbox and textarea controls.
Added JavaScript validation with inline error messages and a live character counter.
Added an enquiry response showing a reference number, price, delivery fee, estimated total and size availability.
Added a contact form to contact.html with validation and a compiled email preview that the customer sends with a mailto link.
Created JS/forms.js and added form styling to style.css.

Interactive features
Added a gallery lightbox with keyboard navigation (JS/lightbox.js).
Added Google Maps embeds for the Johannesburg and Pretoria locations on contact.html.
Added product search, brand filter and sorting to products.html (JS/products.js).
Added a spin-the-wheel welcome reward to index.html (JS/wheel.js): weighted prizes, a unique reward code per prize, pictures of the SPRAYGROUND backpack and SneakNova cup inside the wheel, a frosted-glass design, and one spin per browser using localStorage.

Fixes
Moved the Google Fonts @import rule to the top of style.css, because browsers ignore it anywhere else.
Fixed srcset warnings caused by spaces in image file names.
Fixed the launch configuration after the home page was renamed.

Deployment and GitHub
Deployed the website to GitHub Pages: https://lesego100.github.io/SNEAKNOVA
Committed each feature separately with descriptive commit messages.

Screenshots of different devices
Part 2 - Responsive Layout
<img width="808" height="632" alt="mobile" src="https://github.com/user-attachments/assets/17566692-da71-4b76-9497-6095fb025db9" />
<img width="807" height="626" alt="tablet" src="https://github.com/user-attachments/assets/ed156668-b3ae-4538-a75a-299978eead91" />
<img width="807" height="628" alt="desktop" src="https://github.com/user-attachments/assets/eb08ec4d-83bf-4fe7-9c25-2a6198171dd5" />

Part 3 - Functionality
![Enquiry form showing validation errors](SCREENSHOTS/SCREENSHOTS/product-enquiry-errors.png)
![Enquiry response with price and availability](SCREENSHOTS/SCREENSHOTS/enquiry-response-box.png)
![Wheel before spin for new customers](SCREENSHOTS/SCREENSHOTS/SCREENSHOTS/wheel-before-spin.png)
![Wheel after spin](SCREENSHOTS/SCREENSHOTS/SCREENSHOTS/wheel-after-spin.png)
![product search](SCREENSHOTS/SCREENSHOTS/SCREENSHOTS/product-search.png)
![Lightbox functionality in gallery page](SCREENSHOTS/SCREENSHOTS/SCREENSHOTS/lightbox.png)
![Prepared email from contact page](SCREENSHOTS/SCREENSHOTS/SCREENSHOTS/prepared-email-after-filling-in-contact-page-form.png)
![iPhone perspective](SCREENSHOTS/SCREENSHOTS/SCREENSHOTS/iphone-view.png)
![iPad perspective](SCREENSHOTS/SCREENSHOTS/SCREENSHOTS/SCREENSHOTS/ipad-view.png)
![Map found on contacts page](SCREENSHOTS/SCREENSHOTS/SCREENSHOTS/SCREENSHOTS/SCREENSHOTS/find-us-maps.png)

References
Adidas (2022) Adidas official website | Adidas South Africa. Available at: https://www.adidas.co.za/ (Accessed: 2026).

Anthropic (2026) Claude [Large language model]. Available at: https://claude.ai (Accessed: 31 October 2026).

Culture Kings (2026) Puma Suede XL Puma Black. Available at: https://www.culturekings.com.au/products/puma-suede-xl-puma-black (Accessed: 2026).

Dani Krossing (2017) 17: How to make a website responsive | Learn HTML and CSS | Full course for beginners [Video]. YouTube, 29 November. Available at: https://www.youtube.com/watch?v=ZYV6dYtz4HA (Accessed: 2026).

Extra Butter (2026) Converse Men's Chuck 70 Hi Plus shoes. Available at: https://extrabutterny.com/products/converse-mens-chuck-70-hi-plus-shoes (Accessed: 2026).

freeCodeCamp.org (2018) HTML tutorial – how to make a super simple website [Video]. YouTube. Available at: https://www.youtube.com/watch?v=PlxWf493en4 (Accessed: 13 August 2026).

GeeksforGeeks (n.d.) How to create a website using HTML and CSS? Available at: https://www.geeksforgeeks.org/web-templates/design-a-web-page-using-html-and-css/ (Accessed: 2026).

GitHub (n.d.) GitHub Pages. Available at: https://pages.github.com/ (Accessed: 31 October 2026).

Google (n.d.a) Google Fonts. Available at: https://fonts.google.com/ (Accessed: 31 October 2026).

Google (n.d.b) Google Maps. Available at: https://www.google.com/maps (Accessed: 31 October 2026).

Joshi, M. (n.d.) How to build a website using HTML and CSS. BrowserStack. Available at: https://www.browserstack.com/guide/build-a-website-using-html-css (Accessed: 2026).

Journeys (2026) adidas Campus 00s athletic shoe – core black / cloud white / off white. Available at: https://www.journeys.com/product/adidas-campus-00s-athletic-shoe-core-black-cloud-white-off-white-437223 (Accessed: 2026).

Levantè Urban (2021) Converse All Star Lift platform black. Available at: https://levante.co.za/product/converse-all-star-lift-platform-black/ (Accessed: 2026).

MDN Web Docs (2024) What is CSS? Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/What_is_CSS (Accessed: 6 August 2026).

Modalite (2019a) Air Force 1 '07 fresh. Available at: https://www.modalite.net/ie/men/nike/shoes/air-force-1-07-fresh/7762269/ (Accessed: 2026).

Modalite (2019b) X Crazyfast.3 firm ground boots. Available at: https://www.modalite.net/ie/kid/adidas/boots/x-crazyfast3-firm-ground-boots/7575238/ (Accessed: 2026).

Nike (2026) Nike South Africa. Available at: https://www.nike.com/za/ (Accessed: 2026).

Nike (n.d.) Nike Air Max trainers, sneakers & shoes. Available at: https://www.nike.com/za/w/air-max-shoes-a6d8hzy7ok (Accessed: 2026).

Oppido, L. (n.d.) How to use Google Fonts in CSS: import fonts to CSS files. wikiHow. Available at: https://www.wikihow.tech/Use-Google-Fonts-in-CSS (Accessed: 2026).

Pinterest (2026a) Adidas Superstar shoes black. Available at: https://za.pinterest.com/pin/adidas-superstar-shoes-black--548946642087608141/ (Accessed: 2026).

Pinterest (2026b) New Balance 530 en color blanco. Available at: https://za.pinterest.com/pin/new-balance-530-en-color-blanco--948852215238425707/ (Accessed: 2026).

PROROZ (2021) How to create a website using HTML & CSS | step-by-step tutorial [Video]. YouTube, 16 May. Available at: https://www.youtube.com/watch?v=CQZxeoQeo5c (Accessed: 2026).

Tirri, G. (2024) Complete responsive website using HTML CSS | Responsive web design tutorial [Video]. YouTube, 24 March. Available at: https://www.youtube.com/watch?v=5NEUGWSD-BE (Accessed: 2026).

Vans South Africa (n.d.) Knu Skool. Available at: https://vans.co.za/collections/knu-skool (Accessed: 2026).

W3Schools (n.d.) CSS Google fonts. Available at: https://www.w3schools.com/css/css_font_google.asp (Accessed: 2026).

We The Best Shop (2026) Nike Shox TL 'Black Max Orange'. Available at: https://www.wethebestshopza.co.za/products/nike-shox-tl-black-max-orange/ (Accessed: 2026).