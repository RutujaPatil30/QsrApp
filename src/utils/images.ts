const prefix = '../assets/';

export const images = {
    onboarding_logo: require(prefix + 'mcdLogo.png'),
    onboarding_ronald : require(prefix + 'mcdronald.png'),
    homescreen_mcdIcon : require(prefix + 'mcdIcon.png'),
    cartScreen_emptyCart : require(prefix + 'emptyCart.png')
   
}
export const carouselImages = [
    require(prefix + 'carousalOne.jpg'),
    require(prefix + 'carousalTwo.jpg'),
    require(prefix + 'carousalThree.jpg')
]

export const data = [
    {id: 1, label: 'Pune, India', value: 'pune'},
    {id: 2, label: 'Nashik, India', value: 'nashik'},
    {id: 3, label: 'Mumbai, India', value: 'mumbai'},
];

export const category = [
    {id: 1, title: 'Breakfast', image: require(prefix + 'breakfast.png')},
    {id: 2, title: 'Drinks', image: require(prefix + 'drinks.png')},
    {id: 3, title: 'Desserts', image: require(prefix + 'dessert.png')},
    {id: 4, title: 'Sides', image: require(prefix + 'sides.png')},
];

export const SpecialOfferData = [
    {
      id: 17,
      title: 'Big Mac Beef Rasher',
      image: require( prefix + 'itemDetails.png'),
      price: 108,
      qty: 0,
    },
    {
      id: 18,
      title: 'Happy Meal 4 pcs McNuggets',
      image: require(prefix + 'comboMcChicken.png'),
      price: 250,
      qty: 0,
    },
    {
      id: 19,
      title: 'Double Cheese McFlavor fries',
      image: require( prefix + 'twoMcSpicyChicken.png'),
      price: 390,
      qty: 0,
    },
    {
      id: 20,
      title: 'Triple Burger with Cheese',
      image: require(prefix + 'twoVegBurgerFries2Coke.png'),
      price: 280,
      qty: 0,
    },
  ];

  export const SpecialOfferPageData = [
    {
      id: 17,
      title: 'Big Mac Beef Rasher',
      image: require(prefix + 'itemDetails.png'),
      price: 108,
      qty: 0,
    },
    {
      id: 18,
      title: 'Happy Meal 4 pcs McNuggets',
      image: require(prefix +'comboMcChicken.png'),
      price: 250,
      qty: 0,
    },
    {
      id: 19,
      title: 'Double Cheese McFlavor fries',
      image: require(prefix +'twoMcSpicyChicken.png'),
      price: 390,
      qty: 0,
    },
    {
      id: 20,
      title: 'Triple Burger with Cheese',
      image: require(prefix +'twoVegBurgerFries2Coke.png'),
      price: 280,
      qty: 0,
    },
    {
      id: 21,
      title: 'PaNas 2 with Fries',
      image: require(prefix +'paneerAloo.png'),
      price: 299,
      qty: 0,
    },
    {
      id: 22,
      title: 'Shared Box with Thousand island Sauce',
      image: require(prefix +'special.png'),
      price: 450,
      qty: 0,
    },
  ];