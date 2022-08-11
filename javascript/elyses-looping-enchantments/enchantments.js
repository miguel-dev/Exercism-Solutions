// @ts-check

/**
 * Reminder of division of odd number.
 */
const ODD_REMINDER = 1;

/**
 * Reminder of division of even number.
 */
const EVEN_REMINDER = 0;

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  let numberCards = 0;
  
  stack.forEach(cardInDeck => {
    if (cardInDeck === card) {
      numberCards++;
    }
  });
  return numberCards;
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  let numberCards = 0;
  const reminder = (type ? EVEN_REMINDER : ODD_REMINDER);

  for (const card of stack) {
      if (card % 2 === reminder) {
        numberCards++;
      }
  }
  return numberCards;
}
