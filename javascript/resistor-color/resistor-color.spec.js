import { colorCode, COLORS } from './resistor-color';

describe('ResistorColor', () => {
  describe('Color codes', () => {
    xtest('Black', () => {
      expect(colorCode('black')).toEqual(0);
    });

    xtest('White', () => {
      expect(colorCode('white')).toEqual(9);
    });

    xtest('Orange', () => {
      expect(colorCode('orange')).toEqual(3);
    });
  });

  test('Colors', () => {
    expect(COLORS).toEqual([
      'black',
      'brown',
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'violet',
      'grey',
      'white',
    ]);
  });
});
