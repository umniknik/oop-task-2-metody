export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Ошибка. Нарушен лимит символов');
    }

    if (!(typeof type === 'string')) {
      throw new Error('Ошибка. Type не является строкой');
    }

    const arrTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!arrTypes.includes(type)) {
      throw new Error('Ошибка. Такого типа героя НЕТ');
    }

    this.type = type;
    this.name = name;
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Нельзя повысить левел умершего');
    }
    this.level += 1;
    this.attack *= 1.20;
    this.defence *= 1.20;
    this.health = 100;
  }

  damage(points) {
    if (this.health === 0) {
      throw new Error('Нельзя нанести урон умершему');
    }

    this.health -= points * (1 - this.defence / 100);

    if (this.health < 0) {
      this.health = 0;
    } // Чтобу недопустить отрицательного значения health после вычисления
  }
}
