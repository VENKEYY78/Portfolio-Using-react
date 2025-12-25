const projectsData = [
  {
    id: "todolist",
    title: "Todo List",
    description:
      "A Todo List UI built with HTML and CSS that helps users organize daily tasks. The design is simple and motivational, encouraging productivity.",
    skills: ["HTML", "CSS"],
  },
  {
    id: "chatpage",
    title: "Chat Page",
    description:
      "A chat interface built with HTML and CSS, showing a conversation between two users in a card layout.",
    skills: ["HTML", "CSS"],
  },
  {
    id: "codingcoverpage",
    title: "Coding Cover Page",
    description: "A minimal Bootstrap UI showing a motivational coding quote.",
    skills: ["HTML", "CSS", "Bootstrap"],
  },
  {
    id: "foodorderpage",
    title: "Food Order Page",
    description:
      "A responsive landing page for food orders built using HTML and Bootstrap.",
    skills: ["HTML", "Bootstrap"],
  },
  {
    id: "advancedtechcoverpage",
    title: "Advanced Technologies Card",
    description: "A Bootstrap card displaying advanced technologies.",
    skills: ["HTML", "Bootstrap"],
  },
  {
    id: "newspage",
    title: "News Page",
    description: "A Bootstrap-based news page showing a featured article.",
    skills: ["HTML", "Bootstrap"],
  },
  {
    id: "klrahulpage",
    title: "KL Rahul Cricket Page",
    description:
      "A responsive cricket profile page using HTML, CSS, and Bootstrap.",
    skills: ["HTML", "CSS", "Bootstrap"],
  },
  {
    id: "hotelBooking",
    title: "Hotel Booking Card",
    description:
      "A simple hotel booking card UI built with HTML and Bootstrap.",
    skills: ["HTML", "Bootstrap"],
  },
  {
    id: "covid19Page",
    title: "COVID-19 Awareness Page",
    description: "A responsive COVID-19 info page.",
    skills: ["HTML", "CSS", "Bootstrap"],
  },
  {
    id: "goaTravelPage",
    title: "Goa Travel Page",
    description: "A travel webpage showcasing Goa using Bootstrap.",
    skills: ["HTML", "CSS", "Bootstrap"],
  },
  {
    id: "findingNemoPage",
    title: "Finding Nemo Movie Page",
    description: "A Bootstrap-based movie page.",
    skills: ["HTML", "CSS", "Bootstrap"],
  },
  {
    id: "conferencePage",
    title: "The Things Conference",
    description: "A responsive conference landing page.",
    skills: ["HTML", "Bootstrap"],
  },
  {
    id: "mobileSpecsPage",
    title: "Mobile Specifications Page",
    description: "A responsive mobile specs page.",
    skills: ["HTML", "CSS", "Bootstrap"],
  },
  {
    id: "multiSectionPage",
    title: "Multi-Section Page Navigation",
    description: "A multi-section navigation page.",
    skills: ["HTML", "CSS", "Bootstrap"],
  },
  {
    id: "podcastPage",
    title: "Podcast Home Page",
    description: "A podcast platform UI.",
    skills: ["HTML", "CSS", "Bootstrap"],
  },
  {
    id: "quizPage",
    title: "Quiz Page UI",
    description: "A quiz interface created using Bootstrap.",
    skills: ["HTML", "Bootstrap"],
  },
  {
    id: "sleepMusicPage",
    title: "Sleep Music UI",
    description: "A responsive Sleep Music UI.",
    skills: ["HTML", "CSS", "Bootstrap"],
  },
  {
    id: "popularBookStore",
    title: "Popular Book Store",
    description: "A responsive book store UI.",
    skills: ["HTML", "CSS", "Bootstrap"],
  },
  {
    id: "myProjectsSection",
    title: "My Projects Section",
    description: "A portfolio-style projects section.",
    skills: ["HTML", "CSS", "Bootstrap"],
  },
  {
    id: "shopStoresPage",
    title: "Shop in Favorite Stores",
    description: "A shopping directory page.",
    skills: ["HTML", "CSS", "Bootstrap"],
  },
  {
    id: "foundationsPage",
    title: "Foundations Courses Page",
    description: "A foundations learning page.",
    skills: ["HTML", "CSS", "Bootstrap"],
  },
  {
    id: "yogaExperiencePage",
    title: "Yoga Experience Platform",
    description: "A yoga experience webpage.",
    skills: ["HTML", "CSS", "Bootstrap"],
  },
  {
    id: "flatBookingApp",
    title: "Flat Booking Application",
    description: "A flat booking website.",
    skills: ["HTML", "CSS", "Bootstrap"],
  },
  {
    id: "articlesCarouselPage",
    title: "Articles by Category",
    description: "Category-wise articles page.",
    skills: ["HTML", "CSS", "Bootstrap"],
  },
  {
    id: "responsiveColorPalette",
    title: "Responsive Color Palette",
    description:
      "A responsive page that displays Bootstrap color classes using a flexible grid layout for all screen sizes",
    skills: ["HTML", "CSS", "Bootstrap"],
  },

  {
    id: "responsiveBoxesLayout",
    title: "Responsive Boxes",
    description:
      "A responsive grid layout that displays numbered boxes using Bootstrap columns adapting across all screen sizes",
    skills: ["HTML", "CSS", "Bootstrap", "Responsive Design"],
  },
  {
    id: "foodMunchNavbar",
    title: "Food Munch Responsive Navbar",
    description:
      "A responsive food website navbar built using Bootstrap with collapsible menu support for mobile and desktop views",
    skills: ["HTML", "CSS", "Bootstrap", "Responsive Design"],
  },
  {
    id: "customNavbar",
    title: "Custom Responsive Navbar",
    description:
      "A custom responsive navigation bar built using Bootstrap with collapsible menu support for mobile and desktop screens",
    skills: ["HTML", "CSS", "Bootstrap"],
  },
  {
    id: "vrWebsiteFeatures",
    title: "VR Website Features Section",
    description:
      "A responsive features section for a VR website showcasing immersive capabilities using a grid-based layout",
    skills: ["HTML", "CSS", "Bootstrap", "Responsive Design"],
  },
  {
    id: "includedVrKit",
    title: "Included VR Kit",
    description:
      "A responsive VR kit section that showcases included VR accessories using Bootstrap grid layout",
    skills: ["HTML", "CSS", "Bootstrap", "Responsive Design"],
  },
  {
    id: "vrOpticsAndControllersSection",
    title: "VR Optics and Controllers Section",
    description:
      "A responsive VR website section showcasing improved optics and controller features using a two-column Bootstrap layout",
    skills: ["HTML", "CSS", "Bootstrap", "Responsive Design"],
  },
  {
    id: "vrContactUsSection",
    title: "VR Website Contact Us Section",
    description:
      "A responsive Contact Us section for a VR website featuring a call-to-action layout with image alignment optimized for mobile and desktop views",
    skills: ["HTML", "CSS", "Bootstrap", "Responsive Design"],
  },
  {
    id: "vrTrendingBlogsSection",
    title: "VR Website Trending Blogs Section",
    description:
      "A responsive trending blogs section for a VR website showcasing blog cards with images, descriptions, and read more links using a grid layout",
    skills: ["HTML", "CSS", "Bootstrap", "Responsive Design"],
  },
  {
    id: "vrProductsSection",
    title: "VR Website Products Section",
    description:
      "A responsive products section showcasing VR headsets with pricing and call-to-action buttons using Bootstrap grid layout",
    skills: ["HTML", "CSS", "Bootstrap", "Responsive Design"],
  },
  {
    id: "vrWebsiteFooter",
    title: "VR Website Footer Section",
    description:
      "A responsive footer section for a VR website including logo, social media icons, contact details, and location using Bootstrap and FontAwesome icons.",
    skills: ["HTML", "CSS", "Bootstrap", "FontAwesome", "Responsive Design"],
  },
];

export default projectsData;
