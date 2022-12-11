import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [passWord, setPassWord] = useState<string>("");
  const [strength, setStrength] = useState<number>(0);

  const callReset = () => {
    setPassWord("");
    setStrength(0);
  };

  const handlePassWord = (value: any) => {
    setPassWord(value);
    setStrength(0);

    const atLeastOneUppercase = /[A-Z]/g; // capital letters from A to Z
    const atLeastOneLowercase = /[a-z]/g; // small letters from a to z
    const atLeastOneNumeric = /[0-9]/g; // numbers from 0 to 9
    const atLeastOneSpecialChar = /[#?!@$%^&*-]/g; // any of the special characters within the square brackets
    const eightCharsOrMore = /.{8,}/g; // eight characters or more

    const passwordTracker = {
      uppercase: passWord.match(atLeastOneUppercase),
      lowercase: passWord.match(atLeastOneLowercase),
      number: passWord.match(atLeastOneNumeric),
      specialChar: passWord.match(atLeastOneSpecialChar),
      eightCharsOrGreater: passWord.match(eightCharsOrMore),
    };

    if (passwordTracker.uppercase) {
      setStrength((strength) => strength + 1);
    }
    if (passwordTracker.lowercase) {
      setStrength((strength) => strength + 1);
    }
    if (passwordTracker.number) {
      setStrength((strength) => strength + 1);
    }
    if (passwordTracker.specialChar) {
      setStrength((strength) => strength + 1);
    }
    if (passwordTracker.eightCharsOrGreater) {
      setStrength((strength) => strength + 1);
    }

    console.log(JSON.stringify(strength));
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
