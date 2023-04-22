import Bowman from '../bowman';
import Swordsman from '../swordsman';
import Magician from '../magician';
import Undead from '../undead';
import Zombie from '../zombie';
import Daemon from '../daemon';

test('Check class Bowman', () => {
  const result = new Bowman('Bob', 'Bowman');
  expect(result).toEqual({
    type: 'Bowman', name: 'Bob', health: 100, level: 1, attack: 25, defence: 25,
  });
});

test('Check class Swordsman', () => {
  const result = new Swordsman('Bob', 'Swordsman');
  expect(result).toEqual({
    type: 'Swordsman', name: 'Bob', health: 100, level: 1, attack: 40, defence: 10,
  });
});

test('Check class Magician', () => {
  const result = new Magician('Bob', 'Magician');
  expect(result).toEqual({
    type: 'Magician', name: 'Bob', health: 100, level: 1, attack: 10, defence: 40,
  });
});

test('Check class Undead', () => {
  const result = new Undead('Bob', 'Undead');
  expect(result).toEqual({
    type: 'Undead', name: 'Bob', health: 100, level: 1, attack: 25, defence: 25,
  });
});

test('Check class Zombie', () => {
  const result = new Zombie('Bob', 'Zombie');
  expect(result).toEqual({
    type: 'Zombie', name: 'Bob', health: 100, level: 1, attack: 40, defence: 10,
  });
});

test('Check class Daemon', () => {
  const result = new Daemon('Bob', 'Daemon');
  expect(result).toEqual({
    type: 'Daemon', name: 'Bob', health: 100, level: 1, attack: 10, defence: 40,
  });
});
