import { Router } from 'express';
import { sample_heroes } from '../data';
import asyncHandler from 'express-async-handler';
import { HeroModel } from '../models/hero.model';
const router = Router();

router.get(
  '/seed',
  asyncHandler(async (req, res) => {
    const heroesCount = await HeroModel.countDocuments();
    if (heroesCount > 0) {
      res.send('Seed is already done!');
      return;
    }

    await HeroModel.create(sample_heroes);
    res.send('Seed Is Done!');
  })
);

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const heroes = await HeroModel.find();
    res.send(heroes);
  })
);

router.get(
  '/search/:searchTerm',
  asyncHandler(async (req, res) => {
    const searchRegex = new RegExp(req.params.searchTerm, 'i');
    const heroes = await HeroModel.find({ name: { $regex: searchRegex } });
    res.send(heroes);
  })
);

router.get(
  '/:heroId',
  asyncHandler(async (req, res) => {
    const hero = await HeroModel.findById(req.params.heroId);
    res.send(hero);
  })
);

export default router;
