import home from "../styles/home.module.sass";

export default function Popup(props) {
  return (
    <div className={home.blurContainer}>
      <div className={home.blur}>
        <div className={home.popup}>{props.children}</div>
        <div className={home.blocker} onClick={props.handleClosePopup}></div>
      </div>
    </div>
  );
}
