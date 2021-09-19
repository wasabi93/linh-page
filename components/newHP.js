import home from "../styles/home.module.sass";
import Clock from "./Clock";
import Books from './Books';
import Lamb from './Lamb'
import Board from "./Board";

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
        </div>
      </div>
    </main>
  );
}
