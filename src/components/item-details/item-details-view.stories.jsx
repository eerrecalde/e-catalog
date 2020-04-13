import React from 'react';

import ItemDetailsView from './item-details-view';

const defaultItem = {
  id: 'ac9ec1bd-fd4b-4447-a619-c1a70f5f54b6',
  title: 'New itm 02',
  description: 'Item 02 from eerrecalde',
  tags: null,
  url: 'http://google.com/',
  imgUrl:
    'https://images.pexels.com/photos/3377538/pexels-photo-3377538.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
  videos: [
    '//www.youtube.com/embed/LvteUhmhpKc',
    '//player.vimeo.com/video/22439234?title=0&byline=0',
  ],
  price: 30,
  owner: '121a3d8a-6239-4a5a-bd51-fe58689a0672',
};

export default {
  title: 'ItemDetailsView',
  component: ItemDetailsView,
  excludeStories: /.*Data$/,
  decorators: [(story) => <div style={{ padding: '3rem' }}>{story()}</div>],
};

export const Default = () => (
  <ItemDetailsView
    title={defaultItem.title}
    price={defaultItem.price}
    description={defaultItem.description}
    url={defaultItem.url}
    imgUrl={defaultItem.imgUrl}
    videos={defaultItem.videos}
  />
);
