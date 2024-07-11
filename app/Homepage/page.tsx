"use client";
import React, { useState } from "react";
import { Copy } from "lucide-react";
import UserGreetText from "@/components/UserGreetText";
import LoginButton from "@/components/LoginLogoutButton";

const pickupLinesData = {
  funny: [
    "Are you a parking ticket? Because you've got FINE written all over you!",
    "Do you have a map? I keep getting lost in your eyes.",
    "Are you a magician? Because whenever I look at you, everyone else disappears!",
    "Do you believe in love at first sight—or should I walk by again?",
  ],
  cheesy: [
    "If you were a vegetable you'd be a cute-cumber!",
    "Are you made of copper and tellurium? Because you're Cu-Te.",
    "Is your name Google? Because you've got everything I've been searching for.",
    "Are you a bank loan? Because you've got my interest!",
  ],
  smooth: [
    "Excuse me, I think you dropped something: MY JAW!",
    "I'm not a photographer, but I can picture us together.",
    "Are you a time traveler? Because I see you in my future.",
    "If being sexy was a crime, you'd be guilty as charged!",
  ],
  nerdy: [
    "Are you a 45-degree angle? Because you're acute-y!",
    "You must be the square root of -1, because you can't be real!",
    "Are you made of beryllium, gold, and titanium? You must be BeAuTi-ful!",
    "You and I would add up better than the Riemann sum.",
  ],
};

export default function Home() {
  const [pickupLines, setPickupLines] = useState(["", ""]);
  const [crushInfo, setCrushInfo] = useState("");
  const [style, setStyle] = useState("funny");
  const [isGenerated, setIsGenerated] = useState(false);

  const generatePickupLines = () => {
    const selectedStyle = style.toLowerCase();
    const availableLines =
      pickupLinesData[selectedStyle] || pickupLinesData.funny;
    const randomLines = availableLines
      .sort(() => 0.5 - Math.random())
      .slice(0, 2);
    setPickupLines(randomLines);
    setIsGenerated(true);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <div className="flex justify-around bg-gradient-to-br from-pink-100 to-blue- p-2">
        <UserGreetText />
        <LoginButton />
      </div>
      <div className="min-h-screen bg-gradient-to-br from-pink-100 to-blue-100 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
          <h1 className="text-3xl font-bold text-center text-pink-500 mb-6">
            Pickup Line Generator
          </h1>

          {!isGenerated ? (
            <>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us about your crush
                </label>
                <textarea
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-pink-500"
                  rows="3"
                  value={crushInfo}
                  onChange={(e) => setCrushInfo(e.target.value)}
                  placeholder="She is a 10 but..."
                ></textarea>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Style
                </label>
                <select
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-pink-500"
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                >
                  <option value="funny">Funny</option>
                  <option value="cheesy">Cheesy</option>
                  <option value="smooth">Smooth</option>
                  <option value="nerdy">Nerdy</option>
                </select>
              </div>

              <button
                className="w-full bg-pink-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-pink-600 transition duration-300"
                onClick={generatePickupLines}
              >
                ❤ Generate for me ❤
              </button>
            </>
          ) : (
            <>
              {pickupLines.map((line, index) => (
                <div
                  key={index}
                  className="mb-6 p-4 bg-pink-50 rounded-lg relative"
                >
                  <h2 className="text-lg font-semibold text-pink-500 mb-2">
                    Pickup line {index + 1}
                  </h2>
                  <p className="text-gray-700">{line}</p>
                  <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-pink-500"
                    onClick={() => copyToClipboard(line)}
                  >
                    <Copy size={20} />
                  </button>
                </div>
              ))}

              <button
                className="w-full bg-pink-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-pink-600 transition duration-300"
                onClick={generatePickupLines}
              >
                ❤ Regenerate pickup line ❤
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
