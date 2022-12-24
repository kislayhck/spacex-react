const About = () => {
  return (
    <>
      <img
        className="heroImage"
        src="https://images.theconversation.com/files/10787/original/54954sbn-1337307547.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
        alt="hero"
      />
      <h1 style={{ textAlign: "center", padding: "20px" }}>About Us</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>
              Space Exploration Technologies Corp. (SpaceX) is an American
              spacecraft manufacturer, launcher, and a satellite communications
              corporation headquartered in Hawthorne, California. It was founded
              in 2002 by Elon Musk with the stated goal of reducing space
              transportation costs to enable the colonization of Mars. The
              company manufactures the Falcon 9, Falcon Heavy, and Starship
              launch vehicles, several rocket engines, Cargo Dragon and Crew
              Dragon spacecraft, and Starlink communications satellites.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1541185934-01b600ea069c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8&w=1000&q=80"
              width="400px"
              alt="test"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
