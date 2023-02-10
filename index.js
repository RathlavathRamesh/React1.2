const element = (
  <div className="bg-container">
    <h1 className="heading">Congratulations</h1>
    <div className="small">
      <img
        className="profile"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      <p className="name">Kiran V</p>
      <p className="institute">
        Vishnu Institute of Computer Education And Technology Bhimavaram
      </p>
      <img
        className="watchname"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
