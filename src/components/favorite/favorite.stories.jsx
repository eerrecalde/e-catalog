import React from 'react';
import { action } from '@storybook/addon-actions';
import Favorite from './favorite';

export default {
  title: 'Favorite',
  component: Favorite,
  decorators: [(story) => <div style={{ padding: '1rem' }}>{story()}</div>],
  excludeStories: /.*Data$/,
};

const dataDefault = {
  id: '1',
  isChecked: false,
};

const dataActive = {
  id: '2',
  isChecked: true,
};

// export const actionsData = {
//   onCheckChanged: action('onCheckChanged'),
// };

// export const aaa = 1;

export const Default = () => (
  <Favorite
    id={dataDefault.id}
    isChecked={dataDefault.isChecked}
    onCheckChanged={action('onCheckChanged')}
  />
);

export const Active = () => (
  <Favorite
    id={dataActive.id}
    isChecked={dataActive.isChecked}
    onCheckChanged={action('onCheckChanged')}
  />
);
