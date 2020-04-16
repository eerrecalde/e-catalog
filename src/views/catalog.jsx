/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useParams } from 'react-router-dom';
import ItemsGridView from '../components/grid/grid.view';
import items from '../data/mock';

function Catalog() {
  const { id } = useParams();
  console.log(id);

  return (
    <div className="catalog">
      <ItemsGridView items={items} />
    </div>
  );
}

export default Catalog;
