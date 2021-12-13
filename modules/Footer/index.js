import { ContactInfo } from "../../constants";
import NavButton from "../../components/NavButton";
import BaseButton from "../../components/BaseButton";

export default function FooterModule({}) {
  return (
    <footer className="content-container flex flex-col">
      <div className="responsive-flex space-y-2 tablet:space-y-0 justify-between items-center border-b-2 border-t-2 border-gray-30 py-4">
        <div>
          <p className="text-sm font-bold">
            Copyright © 2021 Ahmet Safa Bülbül -
            Freelance Yazılım Geliştirici
          </p>
        </div>
        <nav className="flex space-x-4 flex-wrap">
          <NavButton href="/gizlilik">
            Gizlilik
          </NavButton>
          <NavButton href="/iletisim">
            İletişim
          </NavButton>

          <NavButton
            externalLink
            href={ContactInfo.twitter}
          >
            Twitter
          </NavButton>

          <NavButton
            externalLink
            href={ContactInfo.github}
          >
            Github
          </NavButton>

          <NavButton
            externalLink
            href={ContactInfo.codepen}
          >
            Codepen
          </NavButton>

          <NavButton
            externalLink
            href={ContactInfo.linkedin}
          >
            LinkedIn
          </NavButton>
        </nav>
      </div>
      <div className="mx-auto py-4">
        <p className="text-sm">
          📌 Bu sitenin kodlarına{" "}
          <BaseButton
            externalLink
            className="underline"
            href="https://github.com/AhmetSBulbul/home-sweet-home"
          >
            github
          </BaseButton>{" "}
          üzerinden erişebilirsiniz.{" "}
        </p>
      </div>
    </footer>
  );
}
