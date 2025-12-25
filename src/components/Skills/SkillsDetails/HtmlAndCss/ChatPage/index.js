import BackButton from "../../backButton.";

import "./index.css";

const ChatPage = () => (
  <div className="chat-page-bg-container">
    <h1 className="person-name">Rahul</h1>
    <div className="msg-container">
      <p className="first-paragraph">Hello Rahul,how are you?</p>
      <p className="sec-paragraph">Hi Varakumar,i am good.How about you?</p>
      <p className="first-paragraph">
        I'm fine.i published my website recently
      </p>
      <p className="sec-paragraph">
        Oh great Varakumar!Can you send me the URL?
      </p>
      <p className="first-paragraph">https://varakumar.ccbp.tech</p>
      <p className="sec-paragraph">Awesome Varakumar,where did you learn</p>
      <p className="first-paragraph">NextWave CCBP 4.0 Program</p>
    </div>

    <div className="back-navigate-button-container">
      <BackButton />
    </div>
  </div>
);

export default ChatPage;
