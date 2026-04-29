import Header from '../public/header/Header.tsx';
import "../public/font/font.ts";
import { fonts } from '../public/font/font.ts';

export default function App() {
  const hours: number = new Date().getHours()
  let welcomeMessage: string = ""
  if (4 <= hours && hours < 11) welcomeMessage = "おはよ！！！！"
  else if (11 <= hours && hours < 18) welcomeMessage = "こんにちは！！！"
  else if (18 <= hours && hours < 0) welcomeMessage = "こんばんは！！"
  else welcomeMessage = "寝ろよ！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！!"
  return (
    <div >
      <Header />
      <div style={{
        paddingLeft: 10
      }}>
        <h1 style={{
          fontFamily: fonts.kosugiMaru
        }}>
          {welcomeMessage}
        </h1>
      </div>
    </div>
  );
}