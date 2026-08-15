import { useState } from "react";
import InputBox from "./InputBox";

export default function SyncContainer() {
  const [text, settext] = useState("");
  return (
    <div>
      <h1>Input Sync</h1>
      <InputBox value={text} onChange={settext} />
      <InputBox value={text} onChange={settext} />
    </div>
  );
}
 