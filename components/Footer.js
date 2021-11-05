import Link from "next/link";
import { ContactInfo } from "../constants";

export default function Footer({}) {
  return (
    <footer className="content-container flex flex-col">
      <div className="responsive-flex space-y-2 tablet:space-y-0 justify-between items-center border-b-2 border-t-2 border-gray-30 py-4">
        <div>
          <p className="text-sm font-bold">
            Copyright © 2021 Ahmet Safa Bülbül -
            Freelance Yazılım Geliştirici
          </p>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/gizlilik">
                <a>Gizlilik</a>
              </Link>
            </li>
            <li>
              <a href={ContactInfo.twitter}>
                Twitter
              </a>
            </li>
            <li>
              <a href={ContactInfo.instagram}>
                Instagram
              </a>
            </li>
            <li>
              <a href={ContactInfo.linkedin}>
                LinkedIn
              </a>
            </li>
          </ul>
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
