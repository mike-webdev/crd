import styles from "../../styles/HowItWorks.module.scss";


export default function HowItWorksImg(props) {
    return (
        <img
        src={props.img}
        alt=""
        className="img-fluid"
    />
    )
}