// MessageParser starter code
// when user writes information that informaiton is carried to the message parser
class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      // inside this message parser we have access to the action provider
      this.state = state;
      // state carried to action provider
    }
  // takes in the message and console logs the message typed by the user

    parse(message) {
      console.log(message)

      const lowercase= message.toLowerCase()

      if (lowercase.includes('hello')) {
        console.log('hi')
      }
    }
  }
  
  export default MessageParser;

