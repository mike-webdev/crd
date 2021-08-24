import styles from "../../styles/Banner.module.scss";
import useTranslation from 'next-translate/useTranslation'
import 'intl-pluralrules'


export default function Banner() {
  const { t } = useTranslation('common')
  return (
    <section className="banner bg-secondary.bg-gradient">
      {/* <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="tagline">
              <h1 className="">{t("Tagline")}</h1>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="header-image">
              <img className="img-fluid rounded-circle w-75" src="https://images.pexels.com/photos/8199174/pexels-photo-8199174.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Header Image" />
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}
