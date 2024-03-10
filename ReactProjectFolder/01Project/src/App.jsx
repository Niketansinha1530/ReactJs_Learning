import "./App.css";
function App() {
  return (
    <>
      <nav>
        <div className="logo">
          <img src="/images/brand_logo.png" />
        </div>
        <ul>
          <li>Menu</li>
          <li>About</li>
          <li>Contact</li>
          <li>Location</li>
        </ul>
        <button>Login</button>
      </nav>

      <div className="container">
        <div className="column1">
          <div className="row1">
            <h1>Your feet deserve the Best</h1>
          </div>
          <div className="row2">
            <h3>
              Your feet deserve the best and where here to help you with our
              shoes. Your feet deserve the best and were here to help you with
              our shoes
            </h3>

            <button className="btn1">Shop Now</button>
            <button className="btn2">Category</button>

            <p>Also Available On:</p>

            <img src="/images/amazon.png" alt="" />
            <img src="/images/flipkart.png" alt="" />
          </div>
        </div>
        <div className="column2">
          <img src="/images/hero-image.png" alt="shoe" />
        </div>
      </div>
    </>
  );
}

export default App;
