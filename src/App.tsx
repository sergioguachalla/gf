"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "¿Estás segura?",
      "Por favorcito 🥺",
      "YA PUES 😭",
      "Pero... 😢",
      "Me voy a morir 💔",
      "*Se desmaya dramáticamente*",
      "Estás hablando con el fantasma de Sergio 👻",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-pink-100">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt="Bear Kiss" />
          <div className="my-4 text-5xl font-extrabold text-pink-700"> Yippieee 💖🥰</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            alt="Love Bear"
          />
          <h1 className="my-4 text-5xl font-extrabold text-pink-600">¿Quieres ser mi novia? 💕</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded-full bg-green-500 px-6 py-3 font-bold text-white hover:bg-green-700 transition-all`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Chii 💘
            </button>
            <button
              onClick={handleNoClick}
              className="rounded-full bg-red-500 px-6 py-3 font-bold text-white hover:bg-red-700 transition-all"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
