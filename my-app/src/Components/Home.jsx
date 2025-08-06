export default function Home() {
  return (
    <>
      <div className="img1">
        <div className="Text1">
          <h1>Welcome To our Yoga Studio</h1>
          <p>
            Discover the perfect yoga style for your mind, body, and spirit.
          </p>
        </div>
      </div>
      <br />
      <h3>Popular Yoga styles</h3>
      <br />
      <div className="row">
        <div className="col">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://t3.ftcdn.net/jpg/01/23/03/54/360_F_123035476_pCgiA87yFdoLNDFPUxxtYsRuIC7uI75x.jpg"
              className="img-thumbnail"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Hatha Yoga</h5>
              <p className="card-text">
                A gentle form of yoga that focuses on physical postures and
                breathing excercises
              </p>
              <a href="#" className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://www.datocms-assets.com/135987/1723912446-6-29bloghero_jeremydancerposeyoga1200x900.jpg"
              className="img-thumbnail"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Vinyasa Yoga</h5>
              <p className="card-text">
                A dynamic style of yoga that sychroconizes movement with breath,
                creating a flow.
              </p>
              <a href="#" className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://cdn-aolkg.nitrocdn.com/JEsNUzsMoDdLqhSXkopLhNFWnBniacqf/assets/images/optimized/rev-5c77932/www.yoganatomy.com/wp-content/uploads/2023/05/ashtanga-vinyasa-yoga-6.jpg"
              className="img-thumbnail"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Ashtanga Yoga</h5>
              <p className="card-text">
                A rigorous and fast paced style of yoga that follows a spefic
                sequence of poses.
              </p>
              <a href="#" className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMRzMSwawwcNMD8XPBj40snYdfsM6GdYa-Ag&s"
              className="img-thumbnail"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Baiikram Yoga</h5>
              <p className="card-text">
                A series of 26 postures pratioed in a heated room to increae
                flexibility and detoxify
              </p>
              <a href="#" className="btn btn-primary">
                Add to cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
