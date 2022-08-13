/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Grams of noodles for a noodle layer.
 */
const GRAMS_NOODLES = 50;

/**
 * Liters of sauce for a sauce layer.
 */
const LITERS_SAUCE = 0.2;

/**
 * The cooking status given a remaining time in minutes.
 * 
 * @param {number} remainingTime
 * @return {string} the cooking status
 */
export function cookingStatus(remainingTime) {
    if (remainingTime === undefined) {
        return 'You forgot to set the timer.';
    }
    else if (remainingTime === 0) {
        return 'Lasagna is done.';
    }
    else {
        return 'Not done, please wait.';
    }
}

/**
 * The preparation time given the number of layers and average time. 
 * 
 * @param {number} layers
 * @param {number} averageTime
 * @return {number} the preparation time in minutes
 * 
 */
export function preparationTime(layers, averageTime = 2) {
    return layers.length * averageTime;
}

/**
 * The quantities of noodles and sauces needed in the meal.
 * 
 * @param {number} layers
 * @return {Quantities.<string, number>} the quantities of noodles and sauce
 */
export function quantities(layers) {
    let quantities = {"noodles": 0, "sauce": 0};
    
    layers.forEach(layer => {
        if (layer == "noodles") {      
            quantities[layer] += GRAMS_NOODLES;
        }
        else if (layer == "sauce") {
            quantities[layer] += LITERS_SAUCE;
        }
    })

    return quantities;
}

/**
 * Adds the last item from friendsList to end of myList. 
 * 
 * @param {number[]} friendsList
 * @param {number[]} myList
 */
export function addSecretIngredient(friendsList, myList) {
    myList.push(friendsList[friendsList.length - 1]);
}

/**
 * Scales the recipe for the desired number of portions.
 * 
 * @param {Recipe.<string, number>} recipeForTwo
 * @param {number} numberPortions
 * @return {Recipe.<string, number>} the recipe for portions needed.
 */
export function scaleRecipe(recipeForTwo, numberPortions) {
    let newRecipe = {};

    for (const key in recipeForTwo) {
        newRecipe[key] = (recipeForTwo[key] / 2) * numberPortions;
    }

    return newRecipe;
}