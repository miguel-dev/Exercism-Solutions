// @ts-check

export const isPangram = (sentence) => {
  const lettersAlphabet = 26;
  const regex = /[a-z]/g;

  const lowCase = sentence.toLowerCase();
  const letterSet = new Set(lowCase.match(regex));

  return letterSet.size === lettersAlphabet;
};