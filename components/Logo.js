import classNames from "classnames";
import { At } from "./icons";
import cn from "classnames";

export default function Logo({ className }) {
  const logoStyle =
    "flex font-link text-sm antialised font-bold justify-center items-center border-2 border-white text-white px-2 py-2 rounded-md";
  return (
    <div className={cn([logoStyle, className])}>
      <At className="text-base mr-1" />
      AHMETSBULBUL
    </div>
  );
}
