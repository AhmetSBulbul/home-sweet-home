import { ContactInfo } from "../../constants";
import NavButton from "../../components/NavButton";

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
        <nav className="flex space-x-4">
          <NavButton href="/gizlilik" small>
            Gizlilik
          </NavButton>

          <NavButton
            externalLink
            href={ContactInfo.twitter}
          >
            Twitter
          </NavButton>

          <NavButton
            externalLink
            href={ContactInfo.instagram}
          >
            Instagram
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
          📌 Bu sitenin kodlarına github üzerinden
          erişebilirsiniz.{" "}
        </p>
      </div>
    </footer>
  );
}
