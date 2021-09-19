
import home from "../styles/home.module.sass";

export default function Popup(props) {
  return (
    <div className={home.blur}>
      <div className={home.popup}>
        <div className={home.noHover}>
          {props.children}
        </div>
      </div>
      <div className={home.blocker} onClick={props.handleClosePopup}></div>
    </div>
  );
}
