import Image from "next/image";
import logo from "../public/vercel.svg";
import HeaderMenuItem from "./HeaderMenuItem";
import { HiHome, HiInformationCircle, HiPhone, HiUser } from "react-icons/hi";

const Header = () => {
  return (
    <div className="flex flex-col xl:flex-row items-center bg-gray-700 text-gray-200 justify-between p-6 select-none">
      <div className="flex">
        <HeaderMenuItem Icon={HiHome} Name="HOME" />
        <HeaderMenuItem Icon={HiUser} Name="ACCOUNT" />
        <HeaderMenuItem Icon={HiPhone} Name="CONTACT" />
        <HeaderMenuItem Icon={HiInformationCircle} Name="ABOUT" />
      </div>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
        width={100}
        height={100}
        className="cursor-pointer active:brightness-110"
      />
    </div>
  );
};

export default Header;
