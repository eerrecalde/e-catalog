/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemFormView from '../components/item-form/item-form.view';
import items from '../data/mock';

function ItemCrud() {
  const { id } = useParams();
  const [item] = useState(items.find((el) => el.id === id));

  return (
    <div className="item-create">
      <ItemFormView item={item} />
    </div>
  );
}

export default ItemCrud;
// export default ItemCrud;
