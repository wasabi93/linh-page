import home from "../styles/home.module.sass";
import Clock from "./stuff/Clock";
import Books from "./stuff/Books";
import Lamb from "./stuff/Lamb";
import Board from "./stuff/Board";
import Photos from "./stuff/Photos";
import NoteBook from "./stuff/NoteBooks";
import Laptop from "./stuff/Laptop";

export default function FullStuff(props) {
  const {
    yellowBook,
    blueBook,
    redBook,
    pinkBook,
    yellowRight,
    handleOpenPopup2020,
    handleOpenPopup2021,
    handleOpenPopup2022,
    handleOpenPopup2019,
    handleOpenPopup2018,
    handleOpenPopup2015,
    handleOpenPopupOther,
    handleOpenPopupPhoto1,
    handleOpenPopupPhoto2,
    handleOpenPopupPhoto3,
    handleOpenPopupPhoto4,
    handleOpenPopupPhoto5,
    handleOpenPopupOnWall,
    handleOpenPopupQuote,
    handleOpenPopupLaptop,
    handleOpenPopupYellow,
    handleOpenPopupBlue,
    handleOpenPopupRed,
    handleOpenPopupYellowRight,
    handleOpenPopupPink,
    handleOpenPopupNote,
  } = props;
  return (
    <>
      <div className={home.bgContainer}>
        <div className={home.clockContainer}>
          <Clock />
        </div>
        <div className={home.booksContainer}>
          <Books
            yellowBook={yellowBook}
            blueBook={blueBook}
            redBook={redBook}
            pinkBook={pinkBook}
            yellowRight={yellowRight}
            handleOpenPopupBlue={handleOpenPopupBlue}
            handleOpenPopupYellow={handleOpenPopupYellow}
            handleOpenPopupPink={handleOpenPopupPink}
            handleOpenPopupRed={handleOpenPopupRed}
            handleOpenPopupYellowRight={handleOpenPopupYellowRight}
          />
        </div>
        <div className={home.lambContainer}>
          <Lamb />
        </div>
        <div className={home.boardContainer}>
          <Board
            handleOpenPopup2022={handleOpenPopup2022}
            handleOpenPopup2021={handleOpenPopup2021}
            handleOpenPopup2020={handleOpenPopup2020}
            handleOpenPopup2019={handleOpenPopup2019}
            handleOpenPopup2018={handleOpenPopup2018}
            handleOpenPopup2015={handleOpenPopup2015}
            handleOpenPopupOther={handleOpenPopupOther}
          />
        </div>
        <Photos
          handleOpenPopupPhoto1={handleOpenPopupPhoto1}
          handleOpenPopupPhoto2={handleOpenPopupPhoto2}
          handleOpenPopupPhoto3={handleOpenPopupPhoto3}
          handleOpenPopupPhoto4={handleOpenPopupPhoto4}
          handleOpenPopupPhoto5={handleOpenPopupPhoto5}
          handleOpenPopupOnWall={handleOpenPopupOnWall}
        />
        <NoteBook
          handleOpenPopupQuote={handleOpenPopupQuote}
          handleOpenPopupNote={handleOpenPopupNote}
        />
        <Laptop handleOpenPopupLaptop={handleOpenPopupLaptop} />
      </div>
    </>
  );
}
