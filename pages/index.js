import Head from "next/head";
import MyHeadButFancy from "../components/MyHeadButFancy";
import TextTitle from "../components/Typography";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row px-5 items-center justify-center min-h-screen pb-10 md:pb-0 bg-gray-100">
      <MyHeadButFancy />
    </div>
  );
}
