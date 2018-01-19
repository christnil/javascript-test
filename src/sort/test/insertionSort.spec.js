import sort from '../insertionSort';
import generateArray from './generateArray';

xdescribe('bubble sort', () => {
  it('works with empty array', () => {
    const a = [];
    sort(a);
    expect(a).to.eql([]);
  });

  it('works with one element', () => {
    [0, 1, 2, 3, 4, 5, 6, 10 ,1000, 938328].map((val) => {
      const array = [val];
      sort(array);
      expect(array).to.eql([val]);
    });
  });

  for (let i = 2; i < 20; i++) {
    it(`works with ${i} elements`, () => {
      const array = generateArray(i);
      sort(array);
      for (let j = 0; j < i - 1; j++) {
        expect(array[j] <= array[j + 1]).to.equal(true);
      }
    });
  }

  it('works with 10000 elements', () => {
    const array = generateArray(10000);
    sort(array);
    for (let j = 0; j < 9999; j++) {
      expect(array[j] <= array[j + 1]).to.equal(true);
    }
  });

  it('works with reverse array', () => {
    const a = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    sort(a);
    expect(a).to.eql([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('works with all same values', () => {
    const a = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
    sort(a);
    expect(a).to.eql([5, 5, 5, 5, 5, 5, 5, 5, 5, 5]);
  });

  it('works with random array', () => {
    const a = [3, 5, 12, 67, 200, 432, 1, 0, -1, -4, 3];
    sort(a);
    expect(a).to.eql([-4, -1, 0, 1, 3, 3, 5, 12, 67, 200, 432]);
  });
});
