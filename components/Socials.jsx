import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube} from "react-icons/fa";
const Socials = ({containerStyles}) => {
  return <ul className={`${containerStyles}`} >
    <li>
        <Link href="/">
            <FaFacebook className="text-2xl text-white" />
        </Link>
    </li>
    <li>
        <Link href="/">
            <FaInstagram className="text-2xl text-white" />
        </Link>
    </li>
    <li>
        <Link href="/">
            <FaYoutube className="text-2xl text-white" />
        </Link>
    </li>
  </ul>;
};

export default Socials;
