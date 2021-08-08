import Head from "next/head";
import MyHeadButFancy from "../components/MyHeadButFancy";
import TextTitle from "../components/Typography";
import Navigation from "../components/Navigation";
import ThemeButton from "../components/ThemeButton";
import FancyButton from "../components/FancyButton";
import SectionHero from "../components/Hero";
import Header from "../components/Header";
import Image from "next/image";
import myLovelyHead from "../public/myHead.png";
import Wave from "../public/wave.svg";
import LandingPage from "../components/LandingPage";
import LandingPageParallax from "../components/LandingPageParallax";

export default function Home() {
  return <LandingPageParallax />;
}
