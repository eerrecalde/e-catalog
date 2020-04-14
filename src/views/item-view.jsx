/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailsView from '../components/item-details/item-details-view';

const item = {
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

function ItemView() {
  const { id } = useParams();
  console.log('id', id);

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
