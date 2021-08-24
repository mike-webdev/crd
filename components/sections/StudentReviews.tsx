
import StudentReviewsItem from "../items/StudentReviewsItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";

export default function StudentReviews() {
  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className="control-right" onClick={onClick}>
        <i className="fas fa-caret-right"></i>
      </div>
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className="control-left" onClick={onClick}>
        <i className="fas fa-caret-left"></i>
      </div>
    );
  }

  var settings = {
    centerPadding: 0,
    dots: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: false,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          dots: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <section className="student-reviews space" id="reviews">
      <div className="container">
        <h2 className="text-center mb-4">STUDENT REVIEWS</h2>
        <br />
        <div className="row">
          <div className="col-sm-12">
            <Slider {...settings} id="studentreviewsslider">
              <StudentReviewsItem
                img="https://images.pexels.com/photos/6238078/pexels-photo-6238078.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                name="Name"
                rating="4.9"
                course="Mintography"
                review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                viverra justo eget vestibulum semper. Mauris mollis sed nunc sed
                imperdiet."
              />
              <StudentReviewsItem
                img="https://images.pexels.com/photos/3755710/pexels-photo-3755710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                name="Name"
                rating="4.9"
                course="Mintography"
                review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                viverra justo eget vestibulum semper. Mauris mollis sed nunc sed
                imperdiet."
              />
              <StudentReviewsItem
                img="https://images.pexels.com/photos/3755716/pexels-photo-3755716.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                name="Name"
                rating="4.9"
                course="Mintography"
                review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                viverra justo eget vestibulum semper. Mauris mollis sed nunc sed
                imperdiet."
              />
              <StudentReviewsItem
                img="https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                name="Name"
                rating="4.9"
                course="Mintography"
                review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                viverra justo eget vestibulum semper. Mauris mollis sed nunc sed
                imperdiet."
              />
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
