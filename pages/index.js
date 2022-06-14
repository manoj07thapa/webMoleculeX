import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Auth } from "aws-amplify";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl text-gray-800 font-bold">
        Hello from web molecule
      </h1>
      <button
        type="submit"
        onClick={() => Auth.signOut()}
        className="border px-4 py-2 bg-rose-600 text-white rounded-sm shadow-sm w-1/3"
      >
        SignOut
      </button>
    </div>
  );
}
