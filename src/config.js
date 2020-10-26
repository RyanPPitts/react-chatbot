// Config starter code
import React from 'react';
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./components/BotAvatar/BotAvatar";

const config = {
  initialMessages: [createChatBotMessage(`Hi, I'm your chatbot`)],
  botName: "ServiceBot",
  customComponents: {
      botAvatar: (props) => <BotAvatar {...props} />
  },
  customStyles: {
      // Overrides chatbot message styles
      botMessageBox: {
          backgroundColor: 'purple',
      },
      //Overrides chatbot button styles
      chatButton: {
          backgroundColor: "purple",
      },
  },

  //define the state of the app
  state: { 
      movieTitles: ["The lord of the rings", "Con air"]
  }
}

export default config