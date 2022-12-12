import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [passWord, setPassWord] = useState<string>("");
  const [strength, setStrength] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(false);

  const callReset: () => void = () => {
    setPassWord("");
    setStrength(0);
  };

  const callVis: () => void = () => {
    setVisible(!visible);
  };

  const handlePassWord: (
    value: string,
    e: React.SyntheticEvent<EventTarget>
  ) => void = (value: string, e: React.SyntheticEvent<EventTarget>) => {
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

    setStrength(tempStrength);
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

      <main className={styles.main}>
        <h1>Password strength</h1>
        <h2>Enter the password</h2>
        <section className={styles.section}>
          <input
            className={styles.input}
            onChange={(e) => handlePassWord(e.target.value, e)}
            type={visible ? "password" : "name"}
            placeholder="Enter password please"
            value={passWord}
          ></input>
          <button className={styles.buttonvis} onClick={() => callVis()}>
            vis
          </button>
        </section>
        <section className={styles.section}>
          <h3 className={styles.h3}>
            Password strength:
            {strength === 0 ? (
              <div>N/A</div>
            ) : strength === 1 ? (
              <div>Very Weak</div>
            ) : strength === 2 ? (
              <div>Weak</div>
            ) : strength === 3 ? (
              <div>Medium</div>
            ) : strength === 4 ? (
              <div>Strong</div>
            ) : (
              <div>Very Strong</div>
            )}
          </h3>
          <button className={styles.buttonres} onClick={() => callReset()}>
            reset
          </button>
        </section>
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
