import meinLieblichKopf from "../../images/myHead.png";
import Image from "next/image";
import cn from "classnames";

const MyLovelyHeadFigure = ({ className }) => {
  return (
    <div>
      <Image
        src={meinLieblichKopf}
        alt="my lovely head"
        objectFit="contain"
        layout="fill"
        className={cn([className])}
      />
    </div>
  );
};

export default MyLovelyHeadFigure;
