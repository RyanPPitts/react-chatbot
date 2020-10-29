// ActionProvider starter code
//implement methods and send response to the user
// message parser takes the message and the action provider responds
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }

    //action that we can use in the messageParser -- response to the user
    helloworldHandler = () => {
      const message = this.createChatBotMessage("Hello, I'm self aware human")
      this.setChatbotMessage(message)
    }

    todosHandler = () => {
      const message = this.createChatBotMessage("Sure. Here's your todos", {
        widget: "todos",
      })
      this.setChatbotMessage(message);
    }

    //method to allow to add chatbot message to the state of the app
    setChatbotMessage = (message) => {
      this.setState(state => ({ ...state, messages: [ ...state.messages, message ]}) )
    }
  }
  
  export default ActionProvider;