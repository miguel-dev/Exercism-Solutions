// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Number of days in a week. 
 */
const DAYS_PER_WEEK = 7;

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let getTotal = (previousBirdsPerDay, currentBirdsPerDay) => previousBirdsPerDay + currentBirdsPerDay;
  return birdsPerDay.reduce(getTotal, 0);
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  const start = (week - 1) * DAYS_PER_WEEK;
  const end = start + DAYS_PER_WEEK;
  return totalBirdCount(birdsPerDay.slice(start, end));
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  const length = birdsPerDay.length;

  for (let i = 0; i < length; i += 2) {
      birdsPerDay[i]++;
  }
  return birdsPerDay;
}