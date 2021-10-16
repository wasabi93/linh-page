import Image from "next/image";

import home from "../../styles/home.module.sass";
import boardHP from "../../public/stuff/board/board_for_homepage.png";

export default function BoardHP(props) {
    return(
        <div className={home.boardContainer} onClick={props.handleOpenPopupBoard}>
            <Image 
                src={boardHP}
                alt=''
                layout='responsive'
            />
        </div>
    )
}