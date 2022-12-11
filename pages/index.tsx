import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [passWord, setPassWord] = useState<string>("");
  const [strength, setStrength] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(false);

  const callReset = () => {
    setPassWord("");
    setStrength(0);
  };

  const callVis = () => {
    setVisible(!visible);
  };

  const handlePassWord = (value: any, e: any) => {
    e.preventDefault();

    const pw = value;
    let tempStrength = 0;

    const atLeastOneUppercase = /[A-Z]/g; // capital letters from A to Z
    const atLeastOneLowercase = /[a-z]/g; // small letters from a to z
    const atLeastOneNumeric = /[0-9]/g; // numbers from 0 to 9
    const atLeastOneSpecialChar = /[#?!@$%^&*-]/g; // any of the special characters within the square brackets
    const eightCharsOrMore = /.{8,}/g; // eight characters or more

    const passwordTracker = {
      uppercase: pw.match(atLeastOneUppercase),
      lowercase: pw.match(atLeastOneLowercase),
      number: pw.match(atLeastOneNumeric),
      specialChar: pw.match(atLeastOneSpecialChar),
      eightCharsOrGreater: pw.match(eightCharsOrMore),
    };

    if (passwordTracker.uppercase) {
      tempStrength++;
    }
    if (passwordTracker.lowercase) {
      tempStrength++;
    }
    if (passwordTracker.number) {
      tempStrength++;
    }
    if (passwordTracker.specialChar) {
      tempStrength++;
    }
    if (passwordTracker.eightCharsOrGreater) {
      tempStrength++;
    }

    setPassWord(value);
    setStrength(tempStrength);
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
          onChange={(e) => handlePassWord(e.target.value, e)}
          type={visible ? "password" : "name"}
          placeholder="Enter password please"
          value={passWord}
        ></input>
        <button onClick={() => callVis()}>vis</button>
        <h3>test strength output:{strength}</h3>
        <button onClick={() => callReset()}>reset</button>
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
