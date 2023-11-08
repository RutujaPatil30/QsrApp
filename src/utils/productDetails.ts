const prefix = '../assets/';

const ProductDetails = {
    Breakfast: [
      {
        id: 1,
        title: 'Big Breakfast',
        description:
          'Wake up to a breakfast meal with a warm biscuit, fluffy scrambled eggs, savory McDonald sausage and crispy golden Hash Browns. ',
        image: require( prefix + 'bigBreakfast.png'),
        price: 20.0,
        qty: 0,
      },
      {
        id: 2,
        title: 'Hotcakes',
        description:
          'Hotcakes with a side of real butter and sweet maple flavored Hotcake syrup. ',
        image: require(prefix + 'hotCakes.png'),
        price: 25.0,
        qty: 0,
      },
      {
        id: 3,
        title: 'Sausage Burrito',
        description:
          'McDonalds Breakfast Burrito recipe is loaded with fluffy scrambled egg, pork sausage, melty cheese, green chiles, and onion! It is wrapped in a soft tortilla, making it the perfect grab and go breakfast.',
        image: require(prefix + 'sausageBurrito.png'),
        price: 25.0,
        qty: 0,
      },
      {
        id: 4,
        title: 'Egg McMuffin Meal',
        description:
          'This McDonalds breakfast meal features an Egg McMuffin®, crispy McDonalds hash browns, and a small McCafé® Premium Roast Coffee',
        image: require(prefix + 'eggMcMuffin.png'),
        price: 25.0,
        qty: 0,
      },
    ],
    Drinks: [
      {
        id: 5,
        title: 'Coca-Cola',
        description:
          'Enjoy a cold, refreshing Coca-Cola® soda from McDonalds that complements all your menu favorites. ',
        image: require(prefix + 'cocoCola.png'),
        price: 10.0,
        qty: 0,
      },
      {
        id: 6,
        title: 'Sprite',
        description:
          'Cool off with the refreshing McDonalds Sprite®—the classic and delicious lemon-lime fountain drink.',
        image: require(prefix + 'sprite.png'),
        price: 15.0,
        qty: 0,
      },
      {
        id: 7,
        title: 'Diet Coke',
        description:
          'There are zero calories and zero sugar in Diet Coke® which makes it a perfect staple to any McDonalds meal ',
        image: require(prefix + 'coke.png'),
        price: 15.0,
        qty: 0,
      },
      {
        id: 8,
        title: 'Lemonade',
        description:
          'Squeeze a little bit of summer in every sip with this refreshing, ice-cold classic Lemonade made with real lemon juice, bits of lemon pulp and real cane sugar.',
        image: require(prefix + 'lemonade.png'),
        price: 15.0,
        qty: 0,
      },
    ],
  
    Desserts: [
      {
        id: 9,
        title: 'McFlurry Oreo',
        description:
          'Delicious soft serve meets crumbled oreo cookies, a match made in dessert heaven.',
        image: require(prefix + 'florea.png'),
        price: 10.0,
        qty: 0,
      },
      {
        id: 10,
        title: 'Hot Fudge',
        description:
          'A sinful delight, soft serve topped with delicious, gooey hot chocolate fudge.',
        image: require(prefix + 'softServeHotFudge.png'),
        price: 15.0,
        qty: 0,
      },
      {
        id: 11,
        title: 'Brownie Hot Fudge ',
        description:
          'Luscious chocolate brownie and hot-chocolate fudge to sweeten your day',
        image: require(prefix + 'brownieHotFudge.png'),
        price: 15.0,
        qty: 0,
      },
      {
        id: 12,
        title: 'Soft Serve',
        description:
          'The cool vanilla soft serve ice cream with twirls of strawberry syrup.',
        image: require(prefix + 'softServe.png'),
        price: 15.0,
        qty: 0,
      },
    ],
    Sides: [
      {
        id: 13,
        title: 'Fries',
        description:
          'World Famous Fries, crispy golden, fried to perfection and lightly salted. Also known as happiness.',
        image: require(prefix + 'fries.png'),
        price: 10.0,
        qty: 0,
      },
      {
        id: 14,
        title: 'Piri Piri Spice Mix',
        description:
          'The perfect, taste bud tingling partner for our World Famous Fries. Shake Shake, and dive in!',
        image: require(prefix + 'periPeriMix.png'),
        price: 15.0,
        qty: 0,
      },
      {
        id: 15,
        title: 'Veg Pizza McPuff',
        description:
          'Crispy brown crust with a generous filling of rich tomato sauce, mixed with carrots, bell peppers, beans, onions and mozzarella.',
        image: require(prefix + 'mcVegPuff.png'),
        price: 15.0,
        qty: 0,
      },
      {
        id: 16,
        title: 'Chicken Nuggets',
        description:
          '4 pieces of our iconic crispy, golden fried Chicken McNuggets!',
        image: require(prefix + 'chickenNuggets.png'),
        price: 15.0,
        qty: 0,
      },
    ],
  };
  
  export default ProductDetails;
  