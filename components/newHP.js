import home from "../styles/home.module.sass";
import Clock from "./Clock";
import Books from './Books';
import Lamb from './Lamb'
import Board from "./Board";
import Photos from "./Photos";
import NoteBook from "./NoteBooks";

export default function NewHP() {
  return (
    <main>
      <div className={home.homepage}>
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
            <Board />
          </div>
          <Photos />
          <NoteBook />
        </div>
      </div>
    </main>
  );
}
