import { classNames } from './classNames';

describe('classNames', () => {
  test('ClassNames only', () => {
    expect(classNames('class', {}, [])).toBe('class');
  });
  test('ClassNames with one mod true', () => {
    expect(classNames('class', { modOne: true }, [])).toBe('class modOne');
  });
  test('ClassNames with one mod true and one mod false', () => {
    expect(classNames('class', { modOne: true, modTwo: false }, [])).toBe(
      'class modOne',
    );
  });
  test('ClassNames with additional mods', () => {
    expect(classNames('class', {}, ['additional1 additional2'])).toBe(
      'class additional1 additional2',
    );
  });
});
