const projectsData = [
  {
    id: "todolist",
    title: "Todo List",
    description:
      "A Todo List UI built with HTML and CSS that helps users organize daily tasks. The design is simple and motivational, encouraging productivity.",
    technologies: ["HTML", "CSS"],
    elements: ["h1", "P", "div", "button"],
  },
  {
    id: "chatpage",
    title: "Chat Page",
    description:
      "A chat interface built with HTML and CSS, showing a conversation between two users in a card layout.",
    technologies: ["HTML", "CSS"],
  },
  {
    id: "codingcoverpage",
    title: "Coding Cover Page",
    description: "A minimal Bootstrap UI showing a motivational coding quote.",
    technologies: ["HTML", "CSS", "Bootstrap"],
  },
  {
    id: "foodorderpage",
    title: "Food Order Page",
    description:
      "A responsive landing page for food orders built using HTML and Bootstrap.",
    technologies: ["HTML", "Bootstrap"],
  },
  {
    id: "advancedtechcoverpage",
    title: "Advanced Technologies Card",
    description: "A Bootstrap card displaying advanced technologies.",
    technologies: ["HTML", "Bootstrap"],
  },
  {
    id: "newspage",
    title: "News Page",
    description: "A Bootstrap-based news page showing a featured article.",
    technologies: ["HTML", "Bootstrap"],
  },
  {
    id: "klrahulpage",
    title: "KL Rahul Cricket Page",
    description:
      "A responsive cricket profile page using HTML, CSS, and Bootstrap.",
    technologies: ["HTML", "CSS", "Bootstrap"],
  },
  {
    id: "hotelBooking",
    title: "Hotel Booking Card",
    description:
      "A simple hotel booking card UI built with HTML and Bootstrap.",
    technologies: ["HTML", "Bootstrap"],
  },
  {
    id: "covid19Page",
    title: "COVID-19 Awareness Page",
    description: "A responsive COVID-19 info page.",
    technologies: ["HTML", "CSS", "Bootstrap"],
  },
  {
    id: "goaTravelPage",
    title: "Goa Travel Page",
    description: "A travel webpage showcasing Goa using Bootstrap.",
    technologies: ["HTML", "CSS", "Bootstrap"],
  },
  {
    id: "findingNemoPage",
    title: "Finding Nemo Movie Page",
    description: "A Bootstrap-based movie page.",
    technologies: ["HTML", "CSS", "Bootstrap"],
  },
  {
    id: "conferencePage",
    title: "The Things Conference",
    description: "A responsive conference landing page.",
    technologies: ["HTML", "Bootstrap"],
  },
  {
    id: "mobileSpecsPage",
    title: "Mobile Specifications Page",
    description: "A responsive mobile specs page.",
    technologies: ["HTML", "CSS", "Bootstrap"],
  },
  {
    id: "multiSectionPage",
    title: "Multi-Section Page Navigation",
    description: "A multi-section navigation page.",
    technologies: ["HTML", "CSS", "Bootstrap"],
  },
  {
    id: "podcastPage",
    title: "Podcast Home Page",
    description: "A podcast platform UI.",
    technologies: ["HTML", "CSS", "Bootstrap"],
  },
  {
    id: "quizPage",
    title: "Quiz Page UI",
    description: "A quiz interface created using Bootstrap.",
    technologies: ["HTML", "Bootstrap"],
  },
  {
    id: "sleepMusicPage",
    title: "Sleep Music UI",
    description: "A responsive Sleep Music UI.",
    technologies: ["HTML", "CSS", "Bootstrap"],
  },
  {
    id: "popularBookStore",
    title: "Popular Book Store",
    description: "A responsive book store UI.",
    technologies: ["HTML", "CSS", "Bootstrap"],
  },
  {
    id: "myProjectsSection",
    title: "My Projects Section",
    description: "A portfolio-style projects section.",
    technologies: ["HTML", "CSS", "Bootstrap"],
  },
  {
    id: "shopStoresPage",
    title: "Shop in Favorite Stores",
    description: "A shopping directory page.",
    technologies: ["HTML", "CSS", "Bootstrap"],
  },
  {
    id: "foundationsPage",
    title: "Foundations Courses Page",
    description: "A foundations learning page.",
    technologies: ["HTML", "CSS", "Bootstrap"],
  },
  {
    id: "yogaExperiencePage",
    title: "Yoga Experience Platform",
    description: "A yoga experience webpage.",
    technologies: ["HTML", "CSS", "Bootstrap"],
  },
  {
    id: "flatBookingApp",
    title: "Flat Booking Application",
    description: "A flat booking website.",
    technologies: ["HTML", "CSS", "Bootstrap"],
  },
  {
    id: "articlesCarouselPage",
    title: "Articles by Category",
    description: "Category-wise articles page.",
    technologies: ["HTML", "CSS", "Bootstrap"],
  },
  {
    id: "responsiveColorPalette",
    title: "Responsive Color Palette",
    description:
      "A responsive page that displays Bootstrap color classes using a flexible grid layout for all screen sizes",
    technologies: ["HTML", "CSS", "Bootstrap"],
  },

  {
    id: "responsiveBoxesLayout",
    title: "Responsive Boxes",
    description:
      "A responsive grid layout that displays numbered boxes using Bootstrap columns adapting across all screen sizes",
    technologies: ["HTML", "CSS", "Bootstrap", "Responsive Design"],
  },
  {
    id: "foodMunchNavbar",
    title: "Food Munch Responsive Navbar",
    description:
      "A responsive food website navbar built using Bootstrap with collapsible menu support for mobile and desktop views",
    technologies: ["HTML", "CSS", "Bootstrap", "Responsive Design"],
  },
  {
    id: "customNavbar",
    title: "Custom Responsive Navbar",
    description:
      "A custom responsive navigation bar built using Bootstrap with collapsible menu support for mobile and desktop screens",
    technologies: ["HTML", "CSS", "Bootstrap"],
  },
  {
    id: "vrWebsiteFeatures",
    title: "VR Website Features Section",
    description:
      "A responsive features section for a VR website showcasing immersive capabilities using a grid-based layout",
    technologies: ["HTML", "CSS", "Bootstrap", "Responsive Design"],
  },
  {
    id: "includedVrKit",
    title: "Included VR Kit",
    description:
      "A responsive VR kit section that showcases included VR accessories using Bootstrap grid layout",
    technologies: ["HTML", "CSS", "Bootstrap", "Responsive Design"],
  },
  {
    id: "vrOpticsAndControllersSection",
    title: "VR Optics and Controllers Section",
    description:
      "A responsive VR website section showcasing improved optics and controller features using a two-column Bootstrap layout",
    technologies: ["HTML", "CSS", "Bootstrap", "Responsive Design"],
  },
  {
    id: "vrContactUsSection",
    title: "VR Website Contact Us Section",
    description:
      "A responsive Contact Us section for a VR website featuring a call-to-action layout with image alignment optimized for mobile and desktop views",
    technologies: ["HTML", "CSS", "Bootstrap", "Responsive Design"],
  },
  {
    id: "vrTrendingBlogsSection",
    title: "VR Website Trending Blogs Section",
    description:
      "A responsive trending blogs section for a VR website showcasing blog cards with images, descriptions, and read more links using a grid layout",
    technologies: ["HTML", "CSS", "Bootstrap", "Responsive Design"],
  },
  {
    id: "vrProductsSection",
    title: "VR Website Products Section",
    description:
      "A responsive products section showcasing VR headsets with pricing and call-to-action buttons using Bootstrap grid layout",
    technologies: ["HTML", "CSS", "Bootstrap", "Responsive Design"],
  },
  {
    id: "vrWebsiteFooter",
    title: "VR Website Footer Section",
    description:
      "A responsive footer section for a VR website including logo, social media icons, contact details, and location using Bootstrap and FontAwesome icons.",
    technologies: [
      "HTML",
      "CSS",
      "Bootstrap",
      "FontAwesome",
      "Responsive Design",
    ],
  },
  {
    id: "ecommerceLandingPage",
    title: "E-commerce Landing Page",
    description:
      "A responsive e-commerce landing page with a navigation bar and image carousel to highlight products, deals, and offers across different screen sizes.",
    technologies: ["HTML", "CSS", "Bootstrap"],
  },
  {
    id: "ecommerceServicesSection",
    title: "E-commerce Services Section",
    description:
      "A responsive e-commerce services section showcasing delivery, customer support, and shopping benefits using Bootstrap cards and grid layout.",
    technologies: ["HTML", "CSS", "Bootstrap"],
  },
  {
    id: "ecommerceProductsWithModal",
    title: "E-commerce Products Section",
    description:
      "A responsive e-commerce products section that showcases featured items and displays detailed product information using Bootstrap modals.",
    technologies: ["HTML", "CSS", "Bootstrap"],
  },
  {
    id: "newYearSpecialOffers",
    title: "New Year Special Offers",
    description:
      "Displays a responsive New Year special offers section with promotional banners, discount highlights, and product images using Bootstrap grid.",
    technologies: ["HTML", "CSS", "Bootstrap"],
  },
  {
    id: "trendingBlogs",
    title: "Trending Blogs",
    description:
      "Displays a responsive trending blogs section with blog cards, images, titles, short descriptions, and read more links using Bootstrap.",
    technologies: ["HTML", "CSS", "Bootstrap"],
  },
  {
    id: "exploreDeals",
    title: "Explore Deals & Offers",
    description:
      "Displays an explore deals and offers section with multiple product categories, discount highlights, product images, and responsive cards using Bootstrap.",
    technologies: ["HTML", "CSS", "Bootstrap"],
  },
  {
    id: "joinTogether",
    title: "Join Together Section",
    description:
      "Displays a call-to-action section encouraging users to connect, featuring a clear heading and a prominent contact button in a clean layout.",
    technologies: ["HTML", "CSS", "Bootstrap"],
  },
  {
    id: "ecommerceFooter",
    title: "Responsive Ecommerce Footer",
    description:
      "A responsive e-commerce footer section with company info, social icons, navigation links, and copyright details.",
    technologies: ["HTML", "CSS", "Bootstrap", "Font Awesome"],
  },
  {
    id: "brandLogosSection",
    title: "Responsive Brand Logos Section",
    description:
      "A responsive brand showcase section displaying logos of well-known companies using Bootstrap grid layout.",
    technologies: ["HTML", "CSS", "Bootstrap"],
  },
  {
    id: "landingPage",
    title: "Responsive Landing Page",
    description:
      "A responsive landing page featuring a navigation bar and hero section with a headline, brief description, and sign-up button to highlight a web design tool.",
    technologies: ["HTML", "CSS", "Bootstrap"],
  },
  {
    id: "designFeatures",
    title: "Responsive Design Features Section",
    description:
      "A responsive feature section highlighting design and development concepts with images, headings, and descriptive text.",
    technologies: ["HTML", "CSS", "Bootstrap"],
  },

  {
    id: "featuresSectiontools",
    title: "Responsive Features Section",
    description:
      "A responsive features section showcasing product features with images, headings, and descriptive text using Bootstrap grid layout.",
    technologies: ["HTML", "CSS", "Bootstrap"],
  },
  {
    id: "awesomeFeaturesSection",
    title: "Awesome Features Section",
    description:
      "A responsive features section showcasing key website design capabilities with icons and descriptions, built using Bootstrap.",
    technologies: ["HTML", "CSS", "Bootstrap"],
  },
];

export default projectsData;
