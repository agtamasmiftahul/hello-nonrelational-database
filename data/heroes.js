db.getCollection('heroes').drop();

heroes = [{
  name: 'Tom',
  age: 24,
  style: 'jungler',
  xp: 500,
  type: 'spell'
}, {
  name: 'Jerry',
  age: 30,
  style: 'mid-lanner',
  xp: 550,
  type: 'physical'
}, {
  name: 'Drinn',
  age: 40,
  style: 'tanker',
  xp: 600,
  type: 'physical'
}]

db.getCollection('heroes').insert(heroes);