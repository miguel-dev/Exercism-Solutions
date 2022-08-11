// @ts-check

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5;
    case 'Energizer':
    case 'Green Garden':
      return 1.5;
    case 'Tropical Island':
      return 3;
    case 'All or Nothing':
      return 5;
    default:
      return 2.5;
  }
}

/**
 * Calculates the number of wedges that can be obtained
 * from a given lime.
 * 
 * @param {string} lime
 * @returns {number} number of wedges from a lime
 */
export function wedgesPerLime(lime) {
  switch (lime) {
      case 'small':
        return 6;
      case 'medium':
        return 8;
      case 'large':
        return 10;
    }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  const totalLimes = limes.length;
  let limesNeeded = 0;
  while (limesNeeded < totalLimes && wedgesNeeded > 0) {
    wedgesNeeded -= wedgesPerLime(limes[limesNeeded]);
    limesNeeded++;
  }
  return limesNeeded;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  const numberOfOrders = orders.length;
  let currentOrder = 0;

  while (currentOrder < numberOfOrders && timeLeft > 0) {
    timeLeft -= timeToMixJuice(orders[currentOrder]);
    currentOrder++;
  }
  return orders.slice(currentOrder);
}
