import { Table } from '@typedorm/common';

export const shopTable = new Table({
  name: process.env.SHOP_TABLE || "",
  partitionKey: 'id'

});


