let heroesModel = require(`../../models/api/index`);

module.exports = {
  list: (req, res) => {
    heroesModel.find((err, heroes) => {
      if (err) {
        return res.status(500).json({
          message: `Error when getting heroes`,
          error: err
        });
      }
      return res.json({
        message: `Here's your heroes`,
        data: heroes
      });
    });
  },
  show: (req, res) => {
    const id = req.params.id;
    heroesModel.findOne({
      _id: id
    }, (err, hero) => {
      if (err) {
        return res.status(500).json({
          message: `Error when getting hero`,
          error: err
        });
      }
      if (!hero) {
        return res.status(404).json({
          message: `No such hero`
        });
      }
      return res.json({
        message: `You choose a hero`,
        data: hero
      });
    });
  },
  create: (req, res) => {
    let hero = new heroesModel({
      name: req.body.name,
      age: req.body.age,
      style: req.body.style,
      xp: req.body.xp,
      type: req.body.type
    });

    hero.save((err, hero) => {
      if (err) {
        return res.status(500).json({
          message: `Error when creating hero`,
          error: err
        });
      }
      return res.status(201).json({
        message: `Created a new hero`,
        data: hero
      });
    });
  },
  update: (req, res) => {
    let id = req.params.id;
    heroesModel.findOne({
      _id: id
    }, (err, hero) => {
      if (err) {
        return res.status(500).json({
          message: `Error when getting hero`,
          error: err
        });
      }
      if (!hero) {
        return res.status(404).json({
          message: `No such hero`
        });
      }

      hero.name = req.body.name ? req.body.name : hero.name;
      hero.age = req.body.age ? req.body.age : hero.age;
      hero.style = req.body.style ? req.body.style : hero.style;
      hero.xp = req.body.xp ? req.body.xp : hero.xp;
      hero.type = req.body.type ? req.body.type : hero.type;

      hero.save((err, hero) => {
        if (err) {
          return res.status(500).json({
            message: `Error when updating hero`,
            error: err
          });
        }
        return res.json({
          message: `Your hero has been updated`,
          data: hero
        });
      });
    });
  },
  remove: (req, res) => {
    let id = req.params.id;
    heroesModel.findByIdAndRemove(id, (err, hero) => {
      if (err) {
        return res.status(500).json({
          message: `Error when deleting hero`,
          error: err
        });
      }
      return res.status(204).json();
    });
  }
};