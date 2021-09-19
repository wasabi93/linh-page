import Image from "next/image";

import home from "../../styles/home.module.sass";
import laptop from '../../public/laptop/laptop.gif'

export default function Laptop() {
    return (
        <div className={home.laptop}>
            <Image 
                src={laptop}
                alt=''
                layout='responsive'
            />
        </div>
    )
}