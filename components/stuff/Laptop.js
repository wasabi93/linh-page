import Image from "next/image";

import home from "../../styles/home.module.sass";
import laptop from '../../public/stuff/laptop/laptop.gif'

export default function Laptop({handleOpenPopupLaptop}) {
    return (
        <div className={home.laptop} onClick={handleOpenPopupLaptop}>
            <Image 
                src={laptop}
                alt=''
                layout='responsive'
            />
        </div>
    )
}