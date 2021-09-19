import home from "../styles/home.module.sass";
import Clock from "./stuff/Clock";
import Books from "./stuff/Books";
import Lamb from "./stuff/Lamb";
import BoardHP from "./stuff/BoardHP";
import Photos from "./stuff/Photos";
import NoteBook from "./stuff/NoteBooks";
import Laptop from "./stuff/Laptop";

export default function FullStuff(props) {
  const {handleOpenPopup2020,handleOpenPopup2021,handleOpenPopup2019,handleOpenPopup2018,handleOpenPopup2015,handleOpenPopupBoard} = props
  return (
    <>
      <div className={home.bgContainer}>
        <div className={home.clockContainer}>
          <Clock />
        </div>
        <div className={home.booksContainer}>
          <Books />
        </div>
        <div className={home.lambContainer}>
          <Lamb />
        </div>
        <div className={home.boardContainer}>
          <BoardHP handleOpenPopupBoard={handleOpenPopupBoard} />
        </div>
        <Photos 
          handleOpenPopup2020={handleOpenPopup2020}
          handleOpenPopup2021={handleOpenPopup2021}
          handleOpenPopup2019={handleOpenPopup2019}
          handleOpenPopup2018={handleOpenPopup2018}
          handleOpenPopup2015={handleOpenPopup2015}
        />
        <NoteBook />
        <Laptop />
      </div>
    </>
  );
}
