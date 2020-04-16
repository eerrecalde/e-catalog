/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailsView from '../components/item-details/item-details-view';
import items from '../data/mock';

function ItemView() {
  const { id } = useParams();
  const [item] = useState(items.find((el) => el.id === id));

  return (
    <div>
      <ItemDetailsView
        title={item.title}
        price={item.price}
        description={item.description}
        url={item.url}
        imgUrl={item.imgUrl}
        videos={item.videos}
      />
    </div>
  );
}

export default ItemView;
