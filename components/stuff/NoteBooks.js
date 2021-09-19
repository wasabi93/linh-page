import Image from "next/image";

import home from "../../styles/home.module.sass";

import wallNote from '../../public/note/note_on_wall.png'
import noteBook from '../../public/notebook/notebook.png'

export default function NoteBook() {
    return (
        <>
        <div className={home.wallNote}>
            <Image 
                src={wallNote}
                alt=''
                layout='responsive'
            />
        </div>
        <div className={home.noteBook}>
            <Image 
                src={noteBook}
                alt=''
                layout='responsive'
            />
        </div>
        </>
    )
}