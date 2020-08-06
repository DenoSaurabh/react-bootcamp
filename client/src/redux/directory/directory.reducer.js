const INITIAL_STATE = {
  sections: [
    {
      title: 'Set your Hat.',
      imageUrl: 'https://i.ibb.co/NjYqX5r/hat.png',
      id: 1,
      linkUrl: 'shop/hats',
      theme: '#F6D3A3',
    },
    {
      title: 'Damm Jackets.',
      imageUrl: 'https://i.ibb.co/SyZ3zVq/jacket.png',
      id: 2,
      linkUrl: 'shop/jackets',
      theme: '#B8BBBE',
    },
    {
      title: 'Sick Sneakers.',
      imageUrl: 'https://i.ibb.co/VHxGRYv/sneaker.png',
      id: 3,
      linkUrl: 'shop/sneakers',
      theme: '#A9CEF3',
    },
    {
      title: 'Womens Wear',
      imageUrl: 'https://i.ibb.co/t3s7x58/womens.png',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens',
      theme: '#F6D3A3',
    },
    {
      title: 'Mens Wear',
      imageUrl: 'https://i.ibb.co/zbjzzwW/mens.png',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens',
      theme: '#9CFFE3',
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
