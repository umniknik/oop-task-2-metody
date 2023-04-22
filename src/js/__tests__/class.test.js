/* eslint-disable no-unused-vars */
import Character from '../class';
import Bowman from '../bowman';

test('Check class Character', () => {
  const result = new Character('Bob', 'Bowman');
  expect(result).toEqual({
    type: 'Bowman', name: 'Bob', health: 100, level: 1,
  });
});

test('Check Error symbol limit', () => {
  expect(() => {
    const result = new Character('B', 'Bowman');
  }).toThrowError('Ошибка. Нарушен лимит символов');
});

test('Check Error type of type', () => {
  expect(() => {
    const result = new Character('Bob', 22);
  }).toThrowError('Ошибка. Type не является строкой');
});

test('Check Error type from list of geroes', () => {
  expect(() => {
    const result = new Character('Bob', 'Bbbbbbb');
  }).toThrowError('Ошибка. Такого типа героя НЕТ');
});

test('Check levelUp Error helth = 0', () => {
  expect(() => {
    const bowman = new Bowman('Bob', 'Bowman');
    bowman.health = 0;
    bowman.levelUp();
  }).toThrowError('Нельзя повысить левел умершего');
});

test('Check levelUp', () => {
  const expectResult = {
    type: 'Bowman', name: 'Bob', health: 100, level: 2, attack: 30, defence: 30,
  };
  const bowman = new Bowman('Bob', 'Bowman');
  bowman.levelUp();
  expect(bowman).toEqual(expectResult);
});

test('Check damage Error helth = 0', () => {
  expect(() => {
    const bowman = new Bowman('Bob', 'Bowman');
    bowman.health = 0;
    bowman.damage(20);
  }).toThrowError('Нельзя нанести урон умершему');
});

test('Check damage', () => {
  const bowman = new Bowman('Bob', 'Bowman');
  const expectResult = {
    type: 'Bowman', name: 'Bob', health: 85, level: 1, attack: 25, defence: 25,
  };
  bowman.damage(20);
  expect(bowman).toEqual(expectResult);
});

test('Checking that there can be no negative result', () => {
  const bowman = new Bowman('Bob', 'Bowman');
  bowman.health = 1;
  const expectResult = {
    type: 'Bowman', name: 'Bob', health: 0, level: 1, attack: 25, defence: 25,
  };
  bowman.damage(20);
  expect(bowman).toEqual(expectResult);
});
