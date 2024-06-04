import React from "react";
import Link from "next/link";


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/*<div className="text-center text-gray-400 mb-5">*/}
      {/*  <p className={"font-bold text-white"}>Godziny otwarcia:</p>*/}
      {/*  <ul className="list-none p-0 m-0">*/}
      {/*    <li>Poniedziałek-Wtorek: Zamknięte</li>*/}
      {/*    <li>Środa-Czwartek: 14:00–21:00</li>*/}
      {/*    <li>Piątek-Sobota: 14:00–23:00</li>*/}
      {/*    <li>Niedziela: 13:00–21:00</li>*/}
      {/*  </ul>*/}
      {/*</div>*/}
      <p className="mt-8 mb-8 text-base leading-6 text-center text-gray-400">
        © {currentYear} Zakwas, created by{" "}
        <Link
          className={"underline"}
          href={"https://www.linkedin.com/in/kacper-wlodarczyk/"}
        >
          Kacper Włodarczyk
        </Link>
        .
      </p>
    </>
  );
}