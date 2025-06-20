import Link from "next/link";
import { IoCloseOutline } from "react-icons/io5";

const MobileHeader = ({ setShowClose }) => {
  const handleCloseMenu = () => {
    setShowClose(false);
  };
  return (
    <div className="flex justify-between items-center py-5 border-b-2 px-4">
      <div className="text-3xl cursor-pointer" onClick={handleCloseMenu}>
        <IoCloseOutline />
      </div>
      <span>
        <Link href="#">Sign In </Link> or <Link href="#"> Sign Up </Link>
      </span>
    </div>
  );
};

export default MobileHeader;
