import { useState } from "react";

const FONTS = [
  {
    name: "Monserrat",
    value: "font-monserrat",
  },
  {
    name: "Poppins",
    value: "font-poppins",
  },
  {
    name: "Avenir",
    value: "font-avenir",
  },
  {
    name: "Bebas Neue",
    value: "font-bebas-neue",
  },
  {
    name: "DM Sans",
    value: "font-dm-sans",
  },
  {
    name: "Abril Fatface",
    value: "font-abril-fatface",
  },
  {
    name: "Grand Hotel",
    value: "font-grand-hotel",
  },
  {
    name: "Nekro One",
    value: "font-nekro-one",
  },
];

export default function App() {
  const [font, setFont] = useState("");
  const [text, setText] = useState(
    "Hello there, Serve your coffee and enjoy the day :)"
  );

  return (
    <main className="w-4/12 mx-auto mt-10">
      <div className="flex flex-col gap-4" aria-label="input">
        <div className="flex flex-col">
          <label className="text-sm" htmlFor="font">
            Choose Font
          </label>
          <select
            value={text}
            onChange={(e) => setFont(e.target.value)}
            className="border rounded-md p-2"
            id="font"
          >
            <option value="" selected disabled>
              Select font
            </option>
            {FONTS.map((font, i) => (
              <option key={i} value={font.value}>
                {font.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="text">Texing</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="border rounded-md p-2"
            id="text"
            rows={5}
          ></textarea>
        </div>
      </div>
      <div className="mt-10" aria-label="render-text">
        <h3 className="text-sm font-bold">Render</h3>
        <textarea
          onChange={(e) => setText(e.target.value)}
          className={`border-none rounded-md p-2 focus:outline-0 ${font}`}
          id="text"
          rows={5}
          cols={39}
          value={text}
          readOnly
        />
      </div>
    </main>
  );
}
