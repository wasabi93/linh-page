import Image from "next/image";

import home from "../styles/home.module.sass";
import clock from '../public/clock/clock.png'
import hour from '../public/clock/hour.png'
import min from '../public/clock/min.png'
import sec from '../public/clock/sec.png'

export default function Clock() {
    return(
        <div className={home.clock}>
            <Image
                src={clock}
                alt=''
                layout='responsive'
            />
            <div className={home.hourHand}>
                <Image 
                    src={hour}
                    alt=''
                    layout='responsive'
                />
            </div>
            <div className={home.minHand}>
                <Image 
                    src={min}
                    alt=''
                    layout='responsive'
                />
            </div>
            <div className={home.secHand}>
                <Image 
                    src={sec}
                    alt=''
                    layout='responsive'
                />
            </div>
        </div>
    )
}