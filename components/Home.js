import Image from "next/image";
import Link from "next/link";

import {
  AiFillFacebook,
  AiFillBehanceSquare,
  AiOutlineInstagram,
} from "react-icons/ai/";
import logo from "../public/linhquach.svg";
import home from "../styles/home.module.sass";

export default function Home() {
  return (
    <main>
      <div className={home.homeContainer}>
        <div className={home.sideBarContainer}>
          <div>
            <div className={home.logo}>
              <Image src={logo} alt="logo name" layout="responsive" />
            </div>
            <div className={home.navLink}>
              <ul>
                <li>
                  <Link href="/">
                    <a href="/">Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Portfolio</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Personal</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>About/contact</a>
                  </Link>
                </li>
              </ul>
              <ul className={home.navIcon}>
                <li>
                  <Link href="/">
                    <a>
                      <AiOutlineInstagram />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>
                      <AiFillBehanceSquare />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>
                      <AiFillFacebook />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={home.mainContainer}>
          <div className={home.mainGif}>
              <Image 
                src='https://media.giphy.com/media/Utrfj8quziX6XQ3Tc5/giphy.gif?cid=790b7611a03a4d5da18f9b1284c8efe61d68b9901c7f397d&rid=giphy.gif&ct=g'
                alt='gif'
                width= '800'
                height= '450'
              />
          </div>
          <div className={home.introduce}>
            <p>
              Linh Quach, also called Ché is a Vietnamese freelance artist based
              in Danang, Vietnam. She chooses an adorable style to expose her
              point of view of random oddly normal things and hopes her
              artworks, somehow, could make a tiny little of the world a
              slightly better place.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
