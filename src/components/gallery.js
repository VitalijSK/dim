import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const images = [
      {
        original: "../assets/img/wed1.jpg",
        thumbnail: "../assets/img/wed1.jpg"
      },
      {
        original: "../assets/img/wed2.jpg",
        thumbnail: "../assets/img/wed2.jpg"
      },
      {
        original: "../assets/img/wed3.jpg",
        thumbnail: "../assets/img/wed3.jpg"
      },
      {
        original: "../assets/img/wed4.jpg",
        thumbnail: "../assets/img/wed4.jpg"
      }
    ];
    return (
      <div className="section text-center">
        <h1 className="title text-danger">Фотогалерея</h1>

        <div className="row">
          <div className="col-md-12">
            <ImageGallery items={images} />
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
