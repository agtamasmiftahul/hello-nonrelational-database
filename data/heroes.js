db.getCollection('heroes').drop();

heroes = [{
  name: 'Tom',
  age: 24,
  abilites: {
    style: 'jungler',
    xp: 500,
    type: 'spell'
  }
}, {
  name: 'Jerry',
  age: 30,
  abilites: {
    style: 'mid-lanner',
    xp: 550,
    type: 'physical'
  }
}, {
  name: 'Drinn',
  age: 40,
  abilities: {
    style: 'tanker',
    xp: 600,
    type: 'physical'
  }
}]

db.getCollection('heroes').insert(heroes);