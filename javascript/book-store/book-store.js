// @ts-check

const PRICE_PER_BOOK = 800;
const DISCOUNT_PER_BOOK = { 1: 0, 2: 40, 3: 80, 4: 160, 5: 200 };

export const cost = (books) => {
  if (books.length === 0) {
    return 0;
  }

  const distinctBooks = new Set(books);
  const numberDistinctBooks = distinctBooks.size;
  const numberBooks = books.length;

  if (numberDistinctBooks === numberBooks) {
    return numberBooks * (PRICE_PER_BOOK - DISCOUNT_PER_BOOK[numberBooks]);
  } else if (numberDistinctBooks === 1) {
    return numberBooks * PRICE_PER_BOOK;
  }

  console.log(createGroups(books));
  console.log(costGroups(createGroups(books)));
  console.log(balanceGroups(createGroups(books)));

  return costGroups(balanceGroups(createGroups(books)));
};

const countBooks = (books) => {
  let numBooks = {};
  for (let book of books) {
    if (book in numBooks) {
      numBooks[book]++;
    } else {
      numBooks[book] = 1;
    }
  }
  return numBooks;
};

const createGroups = (books) => {
  const numBooks = countBooks(books);
  const groups = [];

  let numGroups = 0;
  for (let book in numBooks) {
    let numberOfBook = numBooks[book];
    if (numberOfBook > numGroups) {
      numGroups = numberOfBook;
    }
  }

  while (numGroups > 0) {
    groups.push([]);
    numGroups--;
  }

  numGroups = groups.length;

  for (let book in numBooks) {
    let numberOfBook = numBooks[book] - 1;
    while (numberOfBook >= 0) {
      groups[numberOfBook].push(book);
      numberOfBook--;
    }
  }

  return groups;
};

const costGroups = (groups) => {
  let netPrice = 0;
  for (let group of groups) {
    let number = group.length;
    switch (number) {
      case 1:
        netPrice += PRICE_PER_BOOK;
        break;
      case 2:
      case 3:
      case 4:
      case 5:
        netPrice += number * (PRICE_PER_BOOK - DISCOUNT_PER_BOOK[number]);
    }
  }
  return netPrice;
};

const balanceGroups = (groups) => {
  let sizes = [];
  for (let group of groups) {
    sizes.push(group.length);
  }

  if (sizes.length === 2 && sizes[0] === 5 && sizes[1] === 3) {
    return balanceFiveThree(groups);
  } else if (sizes.length === 3 && sizes[0] === 5 && sizes[2] === 3) {
    const groupFive = [...groups[0]];
    const group = balanceFiveThree([groups[0], groups[2]]);
    return [group[0], group[1], groupFive];
  } else if (sizes.length === 4 && sizes[0] === 5) {
    const group = balanceFiveThree([groups[0], groups[2]]);
    return group.concat(group);
  }
  return groups;
};

const balanceFiveThree = (twoGroups) => {
  let [groupOfFive, groupOfThree] = twoGroups;
  let newGroups = [];

  for (let index = 0; index < groupOfFive.length; index++) {
    if (groupOfThree.includes(groupOfFive[index]) === false) {
      groupOfThree.push(groupOfFive[index]);
      groupOfFive.splice(index, 1);
      newGroups.push(groupOfFive);
      newGroups.push(groupOfThree.sort());
    }
  }
  return newGroups;
};
