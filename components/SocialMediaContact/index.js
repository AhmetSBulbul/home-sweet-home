import styles from "./index.module.css";
import cn from "classnames";
import * as Icon from "../icons";
import IconButton from "../IconButton";
import { ContactInfo } from "../../constants";

export default function SocialMediaContact({
  className,
  children,
  ...props
}) {
  return (
    <div
      className={cn([styles.wrapper, className])}
    >
      <IconButton href={ContactInfo.github}>
        <Icon.Github />
      </IconButton>
      <IconButton href={ContactInfo.linkedin}>
        <Icon.Linkedin />
      </IconButton>
      <IconButton href={ContactInfo.twitter}>
        <Icon.Twitter />
      </IconButton>
      <IconButton href={ContactInfo.instagram}>
        <Icon.İnstagram />
      </IconButton>
      <IconButton href={ContactInfo.codepen}>
        <Icon.Codepen />
      </IconButton>
    </div>
  );
}
