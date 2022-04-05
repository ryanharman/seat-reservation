import express from 'express';

import {
  createBookableItem,
  createManyBookableItems,
  deleteBookableItem,
  getBookableItem,
  getBookableItems,
  getBookableItemsByOffice,
  updateManyBookableItems
} from '../controllers';

const itemRouter = express.Router();

itemRouter.get("/bookable-item", getBookableItems);
itemRouter.get("/bookable-item/by-id", getBookableItem);
itemRouter.get("/bookable-item/by-office", getBookableItemsByOffice);
itemRouter.delete("/bookable-item", deleteBookableItem);
itemRouter.post("/bookable-item", updateManyBookableItems);
itemRouter.put("/bookable-item", createManyBookableItems);

export default itemRouter;
