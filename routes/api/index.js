const express = require('express');
const router = express.Router();
const heroesController = require('../../controllers/api/index');

/*
 * GET all data
 */
router.get(`/`, heroesController.list);

/*
 * GET by id
 */
router.get(`/:id`, heroesController.show);

/*
 * POST one
 */
router.post(`/`, heroesController.create);

/*
 * PUT by id
 */
router.put(`/:id`, heroesController.update);

/*
 * DELETE by id
 */
router.delete(`/:id`, heroesController.remove);

module.exports = router;