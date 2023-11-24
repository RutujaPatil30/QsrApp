import React, { useState, useEffect, useRef } from 'react';
import MapView, { Region, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { ActivityIndicator, Platform, View, Text, TouchableOpacity, Modal } from 'react-native';
import { request, PERMISSIONS, PermissionStatus } from 'react-native-permissions';
import styles from './styles';
import Stores from '../../utils/storeGeo';
import theme from '../../utils/themes';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import baselocalization from '../../utils/baselocalization';

const MapViewScreen: React.FC = () => {
  const [region, setRegion] = useState<Region | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const mapRef = useRef<MapView | null>(null);

  useEffect(() => {
    const requestLocationPermission = async () => {
      const permission: PermissionStatus =
        Platform.OS === 'ios'
          ? await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
          : await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);

      if (permission === 'granted') {
        Geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setRegion({
              latitude,
              longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            });
            setLoading(false);
          },
          (error) => {
            console.error('Error fetching location:', error);
            setLoading(false);
          },
          { enableHighAccuracy: true, timeout: 41000, maximumAge: 1000 }
        );
      } else {
        console.error('Location permission denied');
        setLoading(false);
      }
    };

    requestLocationPermission();
  }, []);

  const handleFabPress = () => {
    setModalVisible(!modalVisible);
  };

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    setModalVisible(false);

    const cityOutlets = Stores[city];

    const outletCoordinates = cityOutlets.map((outlet) => ({
      latitude: outlet.coordinates.latitude,
      longitude: outlet.coordinates.longitude,
    }));

    mapRef.current?.fitToCoordinates(outletCoordinates, {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
      animated: true,
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.fab} onPress={handleFabPress}>
        <Icon name="store" size={35} color={theme.colors.primary} />
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{baselocalization.mapViewScreen.mapViewScreenSelectCity}</Text>
            {Object.keys(Stores).map((city) => (
              <TouchableOpacity
                key={city}
                style={styles.modalCityItem}
                onPress={() => handleCitySelect(city)}
              >
                <Text style={styles.modalCityText}>{city}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalCloseButtonText}>{baselocalization.mapViewScreen.mapViewScreenClose}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large"  />
         </View>
      ) : (
        <MapView
          style={styles.map}
          initialRegion={region || undefined}
          showsUserLocation
          ref={mapRef}
        >
          {selectedCity &&
            Stores[selectedCity].map((outlet) => (
              <Marker
                key={outlet.id}
                coordinate={{
                  latitude: outlet.coordinates.latitude,
                  longitude: outlet.coordinates.longitude,
                }}
                title={outlet.title}
              />
            ))}
        </MapView>
      )}
    </View>
  );
};

export default MapViewScreen;
