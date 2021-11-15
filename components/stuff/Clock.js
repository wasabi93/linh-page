import Image from 'next/image'

import home from '../../styles/home.module.sass'
import clock from '../../public/stuff/clock/clock.png'
import hour from '../../public/stuff/clock/hour.png'
import min from '../../public/stuff/clock/min.png'
import sec from '../../public/stuff/clock/sec.png'

export default function Clock() {
  return(
    <div className={home.clock}>
      <Image
        src={clock}
        alt=''
        height='490'
        width='587'
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