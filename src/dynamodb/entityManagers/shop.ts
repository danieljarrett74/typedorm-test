import "reflect-metadata";
import { createConnection, getEntityManager } from "@typedorm/core";

import { shopTable } from "../tables/shop";
import { ShopEntity } from "../entities/shop";
import { config } from "aws-sdk";
config.update({ region: "us-east-1" });



createConnection({
  name: "shop",
  table: shopTable,
  entities: [ShopEntity],
});

export const shopEntityManager = getEntityManager("shop");