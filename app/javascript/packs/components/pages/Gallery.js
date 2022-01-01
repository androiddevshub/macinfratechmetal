import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import Gallery1 from "react-grid-gallery";
import PhotoGallery from "react-photo-gallery";

import "./gallery.css";

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: this.props.images,
    };
  }

  render() {
    function importAll(r) {
      return r.keys().map(r);
    }

    function random(min, max) {
      return Math.floor(min + Math.random() * (max + 1 - min));
    }
    const images = importAll(
      require.context(
        "./../../assets/images/gallery",
        false,
        /\.(png|jpe?g|svg)$/
      )
    );

    let newImages = [];

    images.map((image) => {
      newImages.push({
        src: image,
        thumbnail: image,
        thumbnailWidth: random(300, 330),
        thumbnailHeight: random(250, 280),
      });
    });

    // images.map((image) => {
    //   newImages.push({
    //     src: image,
    //     width: random(30, 35),
    //     height: random(25, 30),
    //   });
    // });

    return (
      <div
        style={{
          display: "block",
          minHeight: "1px",
          width: "100%",

          overflow: "auto",
          marginBottom: "100px",
        }}
      >
        <div className="gallery-main">
          {/* <PhotoGallery photos={newImages} margin={20} /> */}
          <Gallery1
            images={newImages}
            enableLightbox={true}
            enableImageSelection={false}
            margin={20}
          />
        </div>
      </div>
    );
  }
}
