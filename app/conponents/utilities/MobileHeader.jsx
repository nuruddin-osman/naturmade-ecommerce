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
        <Link
          className="hover:text-green-900 underline"
          href="/account/login"
          onClick={handleCloseMenu}
        >
          Sign In{" "}
        </Link>{" "}
        or{" "}
        <Link
          className="hover:text-green-900 underline"
          href="/account/register"
          onClick={handleCloseMenu}
        >
          {" "}
          Sign Up{" "}
        </Link>
      </span>
    </div>
  );
};

export default MobileHeader;
