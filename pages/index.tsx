import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [passWord, setPassWord] = useState<string>("");
  const [strength, setStrength] = useState<number>(0);

  const handlePassWord = (value: any) => {
    const passWordStrength = {
      length: 0,
      upperCase: false,
      lowerCase: false,
      specChar: false,
      number: false,
    };
    setPassWord(value);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Password strength</title>
        <meta
          name="description"
          content="Test the strength of your password!"
        />
        <link rel="icon" href="/D.svg" />
      </Head>

      <main>
        <h1>Password strength</h1>
        <h2>Enter the password</h2>
        <input
          onChange={(e) => handlePassWord(e.target.value)}
          type="password"
          placeholder="Enter password please"
          value={passWord}
        ></input>
        <h3>test strength output:</h3>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.dangoer.de/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by
          <span className={styles.logo}>
            <Image src="/D.svg" alt="D Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
