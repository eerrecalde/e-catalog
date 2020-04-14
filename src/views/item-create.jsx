/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ItemFormView from '../components/item-form/item-form.view';

const item = {};

function ItemCrud() {
  return (
    <div className="item-create">
      <ItemFormView item={item} />
    </div>
  );
}

export default ItemCrud;
// export default ItemCrud;
