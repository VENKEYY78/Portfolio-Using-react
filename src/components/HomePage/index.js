import "./index.css";

const HomePage = () => (
  <div className="home-page-main-bg-container">
    <div className="">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY9b_u54JNRxi87Sk4eVhIzrB3B8AJAWMNqw&s"
        className="home-page-cover-photo"
        alt="profile-photo"
      />
    </div>
    <div className="home-page-intraduction-container">
      <h1 className="home-page-name-intraduction">
        Hello, I'm <span className="home-page-name">Venkatesh Joka</span>
      </h1>
      <h2 className="home-page-role">Full Stack Developer</h2>
    </div>
  </div>
);

export default HomePage;
