// @ts-check

export const hey = (message) => {

  const newMessage = message.trim();
  
  if (newMessage === "") {
    return "Fine. Be that way!";
  }

  const isQuestion = newMessage.endsWith('?');
  const regex = /[a-z]/i;
  const checkLetters = regex.test(newMessage);
  const isYelling = checkLetters && (newMessage === newMessage.toUpperCase());
  let response = "";

  if (isQuestion && isYelling) {
    response = "Calm down, I know what I'm doing!";
  } else if (isQuestion) {
    response = "Sure.";
  } else if (isYelling) {
    response = "Whoa, chill out!";
  } else {
    response = "Whatever.";
  }
  return response;
};
