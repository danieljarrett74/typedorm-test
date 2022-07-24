import "reflect-metadata";
import { createConnection, getEntityManager } from "@typedorm/core";

import { shopTable } from "../tables/shop";
import { ShopEntity } from "../entities/shop";
import AWS from 'aws-sdk';
AWS.config.update({ region: "us-east-1" });



createConnection({
  name: "shop",
  table: shopTable,
  documentClient: new AWS.DynamoDB.DocumentClient(),
  entities: [ShopEntity],
});

export const shopEntityManager = getEntityManager("shop");