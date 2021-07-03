import sum from './sum';

describe('Sum function tests', () => {
  it('should return 2', () => {
    expect(sum(1, 1)).toBe(2);
  });

  it('should return 8', () => {
    expect(sum(2, 6)).toBe(8);
  });
});
