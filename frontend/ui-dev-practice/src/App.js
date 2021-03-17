import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="bckg">
        <div>
          <svg height="100" width="100">
            <circle cx="50" cy="50" r="40" fill="black" />
            <rect x="31" y="57" width="40" height="5" fill="white" />
            <rect x="31" y="47" width="40" height="5" fill="white" />
            <rect x="31" y="37" width="40" height="5" fill="white" />
          </svg>
        </div>

        <div className="content-container">
          <h1>find your dream job with us</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor
            at risus viverra adipiscing at in tellus integer. Non sodales neque
            sodales ut. Sed augue lacus viverra vitae congue eu consequat. Nisi
            quis eleifend quam adipiscing vitae proin sagittis.
          </p>
          <button className="btn">apply</button>
        </div>
      </div>
    </div>
  );
};

export default App;
