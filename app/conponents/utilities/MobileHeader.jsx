import Link from "next/link";
import { IoCloseOutline } from "react-icons/io5";

const MobileHeader = ({ setShowClose }) => {
  return (
    <div className="flex justify-between items-center py-5 border-b-2 px-4">
      <span
        className="text-3xl cursor-pointer"
        onClick={() => setShowClose(false)}
      >
        <IoCloseOutline />
      </span>
      <span>
        <Link href="#">Sign In </Link> or <Link href="#"> Sign Up </Link>
      </span>
    </div>
  );
};

export default MobileHeader;
