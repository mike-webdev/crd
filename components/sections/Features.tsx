// import useTranslation from 'next-translate/useTranslation'

export default function Features() {
  // const { t } = useTranslation('common')
  return (
    <>
      <section id="features-background"></section>

      <section className="features space">
        <div className="container feature-details">
          <h2 className="text-center mb-4 ">{("Features")}</h2>
          <p className="text-center " dangerouslySetInnerHTML={{__html:("Features Description")}}></p>
          <br />
          <div className="row">
            <div className="col-lg-6 col-xl-3">
              <div className="feature-box">
                <i className="fas fa-shipping-fast icons2"></i>
                <br />
                <h3>
                  Learn <br /> on the Go
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  aliquet porta libero nec rutrum. Etiam venenatis sagittis
                  velit, a pellentesque magna pulvinar sed.{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-xl-3">
              <div className="feature-box">
                <i className="fas fa-thumbs-up icons2"></i>
                <br />
                <h3>Quick and Easy Lessons</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  aliquet porta libero nec rutrum. Etiam venenatis sagittis
                  velit, a pellentesque magna pulvinar sed.{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-xl-3">
              <div className="feature-box">
                <i className="fas fa-chalkboard-teacher icons2"></i>
                <br />
                <h3>Realtime Teachers</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  aliquet porta libero nec rutrum. Etiam venenatis sagittis
                  velit, a pellentesque magna pulvinar sed.{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-xl-3">
              <div className="feature-box">
                <i className="fas fa-star icons2"></i>
                <br />
                <h3>Learning Rewards</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  aliquet porta libero nec rutrum. Etiam venenatis sagittis
                  velit, a pellentesque magna pulvinar sed.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
