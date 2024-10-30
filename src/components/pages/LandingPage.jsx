import "./landingpage.css";

const LandingPage = () => {
  return (
    <div className="container">
      <h1>Welcome to Our Landing Page</h1>
      <button
        className="button"
        onClick={() => (window.location.href = "./login.html")}
      >
        Log In
      </button>
      <button
        className="button"
        onClick={() => (window.location.href = "./signup.html")}
      >
        Sign Up
      </button>
    </div>
  );
};

export default LandingPage;
