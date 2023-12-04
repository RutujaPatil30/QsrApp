import React from 'react';
import {FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CustomCategoryElements from '../../components/CustomCategoryElements/CustomCategoryElements';
import {add_to_cart_request} from '../../redux/action'
import {styles} from './styles';
import ProductDetails from '../../utils/productDetails'

const CategoryScreen = (props: any) => {
  const {navigation, route} = props;

  const dispatch = useDispatch();
  const userId = useSelector((state: any) => state.reducer.currentUser.id);
  const cartItems = useSelector((state: any) => state.reducer.cartItems);
  const AddItems = (item: any) => {
    dispatch(add_to_cart_request(userId, item));
  };

  return (
    <View style={styles.container}>
      <FlatList
        //@ts-ignore
        data={ProductDetails[route?.params?.title]}
        renderItem={({item}) => (
          <View style={styles.flatlistContainer}>
            <CustomCategoryElements
              testID='CategoryScreen_Elements'
              itemImage={item.image}
              itemName={item.title}
              itemDescription={item.description}
              itemPrice={item.price}
              onPressAdd={() => {
                AddItems(item);
              }}
              onPress={() => {
                navigation.navigate('ProductDetailsScreen', {
                  image: item.image,
                  name: item.title,
                  description: item.description,
                  price: item.price,
                  itemDetails: item,
                });
              }}
            />
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CategoryScreen;
