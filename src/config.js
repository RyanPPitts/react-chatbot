// Config starter code
import React from 'react';
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./components/BotAvatar/BotAvatar";

const config = {
  initialMessages: [createChatBotMessage(`Hi, I'm your chatbot`)],
  botName: "ServiceBot",
  customComponents: {
      botAvatar: (props) => <BotAvatar {...props} />
  }
}

export default config