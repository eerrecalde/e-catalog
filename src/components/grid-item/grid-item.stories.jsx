import React from 'react';
import GridItem from './grid-item';
import './_grid-item.scss'; // eslint-disable-line

const i = {
  id: '377e3490-7031-412c-8e1a-4a22bcc65f19',
  title: 'New item from user 01',
  description: 'New item from user 01',
  tags: null,
  url: 'http://google.com/',
  imgUrl: 'https://images.freeimages.com/images/large-previews/58f/double-bass-1423720.jpg',
  price: 300,
  owner: 'f4c40a60-0312-450b-a2a7-f30761d781a7',
};

export default {
  title: 'GridItem',
  component: GridItem,
  excludeStories: /.*Data$/,
};

const favorite = false;
// export const aaa = 1;

export const Default = () => (
  <div className="container-fluid pt-3">
    <div className="row">
      <div className="col-12 col-xl-3 col-lg-4 col-sm-6 mb-3 align-self-stretch">
        <GridItem
          id={i.id}
          title={i.title}
          description={i.description || undefined}
          price={i.price || undefined}
          url={i.url || undefined}
          imgUrl={i.imgUrl || undefined}
          favorite={favorite}
        />
      </div>
    </div>
  </div>
);
