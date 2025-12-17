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
    <div>
      <h1>
        Hello, I'm <span>Venkatesh Joka</span>
      </h1>
      <h2>Full Stack Developer</h2>
    </div>
  </div>
);

export default HomePage;
