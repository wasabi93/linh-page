import Image from "next/image";

import home from "../../styles/home.module.sass";

import wallNote from '../../public/stuff/note/note_on_wall.png'
import noteBook from '../../public/stuff/notebook/notebook.png'

export default function NoteBook({handleOpenPopupQuote,handleOpenPopupNote}) {
    return (
        <>
        <div className={home.wallNote} onClick={handleOpenPopupQuote}>
            <Image 
                src={wallNote}
                alt=''
                layout='responsive'
            />
        </div>
        <div className={home.noteBook} onClick={handleOpenPopupNote}>
            <Image 
                src={noteBook}
                alt=''
                layout='responsive'
            />
        </div>
        </>
    )
}