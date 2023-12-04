import React, {useState} from 'react';
import {FlatList, TextInput, View} from 'react-native';
import {IconButton} from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import CustomProductOffers from '../../components/CustomProductOffers/CustomProductsOffers';
import { add_to_cart_request } from '../../redux/action';
import baselocalization from '../../utils/baselocalization';
import { SpecialOfferPageData } from '../../utils/images';
import theme from '../../utils/themes';
import { styles } from './styles';


const SpecialOffersScreen= (props:any) => {
  const dispatch = useDispatch();
  const { navigation } = props;
  const [filteredOffer, setFilteredOffer] = useState(SpecialOfferPageData);
  const userId = useSelector((state: any) => state.reducer.currentUser.id);
  const [searchQuery, setSearchQuery] = useState('');

  const addItems = (item: any) => {
    dispatch(add_to_cart_request(userId, item));
  };

  const onPressAdd = (item :any) => {
    navigation.navigate('CartScreen'),
    addItems(item)
  }

  const filterOffer = (query: any) => {
    const filtered = SpecialOfferPageData.filter(offerName =>
      offerName.title.toLowerCase().includes(query.toLowerCase()),
    );
    setFilteredOffer(filtered);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder={baselocalization.homeScreen.homeScreenSearch}
          placeholderTextColor={theme.colors.black}
          value={searchQuery}
          onChangeText={text => {
            setSearchQuery(text);
            filterOffer(text);
          }}
        />
        <IconButton icon="magnify" size={24} />
      </View>
      <FlatList
        data={filteredOffer}
        numColumns={2}
        renderItem={({item}) => (
          <View style={styles.flatListItem}>
            <CustomProductOffers
              testID='SpecialOffersScreen_Products'
              itemImage={item.image}
              itemName={item.title}
              itemPrice={item.price}
              onPress={()=>{onPressAdd(item)}}
            />
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default SpecialOffersScreen;
