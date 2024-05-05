import React from "react";

export default function Dropdown() {
  return (
    <ul className="flex flex-col items-center justify-center my-5">
      <a href="https://t.co/d4CmmseoA1">
        <li className="font-nunito animate-wiggle">Dex screener</li>
      </a>
      <a href="https://t.me/+EtAmLzR4KMAzOGUx">
        <li className="font-nunito animate-wiggle">Telegram</li>
      </a>
      <a href="https://t.me/ChachiOnSolana">
        <li className="font-nunito animate-wiggle">twitter</li>
      </a>
    </ul>
  );
}
