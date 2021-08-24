
import FeaturedCoursesItem from "../items/FeaturedCoursesItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useTranslation from 'next-translate/useTranslation'

export default function FeaturedCourses() {
  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className="control-right" onClick={onClick}><i className="fas fa-caret-right"></i></div>
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className="control-left" onClick={onClick}><i className="fas fa-caret-left"></i></div>
    );
  }

  var settings = {
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,      
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
          },
        },
      ],
  };

  const { t } = useTranslation('common')

  return (
    <section className="featured-courses space" id="featured">
      <div className="container">
        <h2 className="text-center white">{t("Featured Courses")}</h2>
        <p className="text-center white">{t("Featured Courses Description")}</p>
        <br />
        <div className="row">
          <div className="col-sm-12">
            <ul
              className="nav nav-pills mb-3"
              id="featured-courses-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="crd_btn draw-border active"
                  id="pills-toprated-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#toprated"
                  type="button"
                  role="tab"
                  aria-controls="pills-toprated"
                  aria-selected="true"
                >
                  Top Rated
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="crd_btn draw-border"
                  id="pills-newcourse-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#newcourse"
                  type="button"
                  role="tab"
                  aria-controls="pills-newcourse"
                  aria-selected="false"
                >
                  New
                </button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="toprated"
                role="tabpanel"
                aria-labelledby="pills-toprated-tab"
              >
                <Slider {...settings}>
                  <FeaturedCoursesItem
                    img="https://images.pexels.com/photos/247819/pexels-photo-247819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Courst Title"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar, erat quis tempor " 
                    course="Course Title" rating="4.9" reviews="100" months="2 mos" time="3 hrs/wk" level="Lvls 1-6" type="1"
                  />
                  <FeaturedCoursesItem
                    img="https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Courst Title"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar, erat quis tempor " 
                    course="Course Title" rating="4.9" reviews="100" months="2 mos" time="3 hrs/wk" level="Lvls 1-6" 
                  />
                  <FeaturedCoursesItem
                    img="https://images.pexels.com/photos/6238120/pexels-photo-6238120.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Courst Title"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar, erat quis tempor " 
                    course="Course Title" rating="4.9" reviews="100" months="2 mos" time="3 hrs/wk" level="Lvls 1-6" type="1"
                  />
                  <FeaturedCoursesItem
                    img="https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Courst Title"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar, erat quis tempor " 
                    course="Course Title" rating="4.9" reviews="100" months="2 mos" time="3 hrs/wk" level="Lvls 1-6"
                  />
                  <FeaturedCoursesItem
                    img="https://images.pexels.com/photos/6238120/pexels-photo-6238120.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Courst Title"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar, erat quis tempor " 
                    course="Course Title" rating="4.9" reviews="100" months="2 mos" time="3 hrs/wk" level="Lvls 1-6" 
                  />
                </Slider>
              </div>

              <div
                className="tab-pane fade"
                id="newcourse"
                role="tabpanel"
                aria-labelledby="pills-newcourse-tab"
              >
                <Slider {...settings}>
                  <FeaturedCoursesItem
                    img="https://images.pexels.com/photos/247819/pexels-photo-247819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Courst Title"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar, erat quis tempor " 
                    course="Course Title" rating="4.9" reviews="100" months="2 mos" time="3 hrs/wk" level="Lvls 1-6" 
                  />
                  <FeaturedCoursesItem
                    img="https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Courst Title"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar, erat quis tempor " 
                    course="Course Title" rating="4.9" reviews="100" months="2 mos" time="3 hrs/wk" level="Lvls 1-6" 
                  />
                  <FeaturedCoursesItem
                    img="https://images.pexels.com/photos/6238120/pexels-photo-6238120.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Courst Title"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar, erat quis tempor " 
                    course="Course Title" rating="4.9" reviews="100" months="2 mos" time="3 hrs/wk" level="Lvls 1-6" 
                  />
                  <FeaturedCoursesItem
                    img="https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Courst Title"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar, erat quis tempor " 
                    course="Course Title" rating="4.9" reviews="100" months="2 mos" time="3 hrs/wk" level="Lvls 1-6" 
                  />
                  <FeaturedCoursesItem
                    img="https://images.pexels.com/photos/6238120/pexels-photo-6238120.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Courst Title"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar, erat quis tempor " 
                    course="Course Title" rating="4.9" reviews="100" months="2 mos" time="3 hrs/wk" level="Lvls 1-6" 
                  />
                </Slider>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
