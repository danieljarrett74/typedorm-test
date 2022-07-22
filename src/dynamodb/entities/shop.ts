import { Attribute, Entity, AutoGenerateAttribute } from "@typedorm/common";
import { AUTO_GENERATE_ATTRIBUTE_STRATEGY } from "@typedorm/common";
import { IShop } from "../../types";

@Entity({
  name: "shop",
  primaryKey: {
    partitionKey: "{{id}}"
  },
})

export class ShopEntity implements IShop {
  constructor(shop: IShop) {
    this.id = shop.id;

  }
  @Attribute()
  id!: string;


  @AutoGenerateAttribute({
    strategy: AUTO_GENERATE_ATTRIBUTE_STRATEGY.ISO_DATE,
  })
  createdAt!: string;

  @AutoGenerateAttribute({
    strategy: AUTO_GENERATE_ATTRIBUTE_STRATEGY.ISO_DATE,
    autoUpdate: true,
  })
  updatedAt!: string;
}
