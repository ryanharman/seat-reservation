import express from 'express';

import {
  createBookableItem,
  createManyBookableItems,
  deleteBookableItem,
  getAvailableBookableItems,
  getBookableItem,
  getBookableItems,
  getBookableItemsByOffice,
  updateManyBookableItems
} from '../controllers';

const itemRouter = express.Router();

itemRouter.get("/bookable-item", getBookableItems);
itemRouter.get("/bookable-item/by-id", getBookableItem);
itemRouter.get("/bookable-item/by-office", getBookableItemsByOffice);
itemRouter.post("/bookable-item/available", getAvailableBookableItems);
itemRouter.delete("/bookable-item", deleteBookableItem);
itemRouter.post("/bookable-item", updateManyBookableItems);
itemRouter.put("/bookable-item", createManyBookableItems);

export default itemRouter;
