/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import GridItem from '../grid-item/grid-item';

function ItemsGridView({
  loading, error, items, favorites, onCheckChanged, translations,
}) {
  return (
    <div className="container">
      { loading ? (<p>Loading...</p>) : '' }
      { error ? (<p>{error}</p>) : '' }
      { !loading && items && items.length === 0 ? (<p>No results for your query</p>) : '' }
      <ul className="row">
        {items.map((i) => (
          <li key={i.id} className="col-12 col-xl-3 col-lg-4 col-sm-6 mb-3 align-self-stretch">
            <GridItem
              id={i.id}
              title={i.title}
              description={i.description || undefined}
              price={i.price || undefined}
              url={i.url || undefined}
              imgUrl={i.imgUrl || undefined}
              translations={translations}
              favorite={(favorites.indexOf(i.id) > -1)}
              onCheckChanged={onCheckChanged}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

ItemsGridView.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  favorites: PropTypes.arrayOf(PropTypes.string),
  loading: PropTypes.bool,
  error: PropTypes.string,
  onCheckChanged: PropTypes.func,
  translations: PropTypes.exact({
    'catalog.item.external': PropTypes.string,
    'catalog.item.view': PropTypes.string,
  }),
};

ItemsGridView.defaultProps = {
  favorites: [],
  loading: false,
  error: '',
  onCheckChanged: () => {},
  translations: {},
};

export default ItemsGridView;
