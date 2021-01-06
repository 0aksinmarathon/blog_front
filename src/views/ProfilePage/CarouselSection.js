import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

// import image1 from "assets/img/bg.jpg";
// import image2 from "assets/img/bg2.jpg";
// import image3 from "assets/img/bg3.jpg";
import image1 from "assets/img/DSC_6379.JPG";
import image2 from "assets/img/DSC_6783.JPG";
import image3 from "assets/img/DSC_7104.JPG";

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";
import stylesCarousel from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

const useStyles = makeStyles(styles);
const useStylesCarousel = makeStyles(stylesCarousel);

export default function CarouselSection() {
  const classes = useStyles();
  const classesCarousel = useStylesCarousel();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return (
    <div className={classes.section}>
      
      <div className={classes.container}>
      <div className={classesCarousel.title}>
            <h2 className={classesCarousel.title}>Favorite Scenes</h2>
          </div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={image1} alt="First slide" className="slick-image" />
                  <div className="slick-caption-white" font-color="blue" color="blue">
                    <h4 color="red">
                      <LocationOn className="slick-icons" />
                      Kasai Rinkai Park, Tokyo, Japan
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src={image2}
                    alt="Second slide"
                    className="slick-image"
                  />
                  <div className="slick-caption-black">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Kasai Rinkai Park, Tokyo, Japan
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image3} alt="Third slide" className="slick-image" />
                  <div className="slick-caption-white">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Kasai Rinkai Park, Tokyo, Japan
                    </h4>
                  </div>
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
