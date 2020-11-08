import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import Card from '../shared/card';
import { globalStyles, images } from '../styles/global';

const ReviewDetails = ({ route }) => {
  const rating = route.params.rating;

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{route.params?.title}</Text>
        <Text>{route.params?.body}</Text>
        <View style={styles.rating}>
          <Text>Gamezone rating:</Text>
          <Image source={images.rating[rating]} />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
});

export default ReviewDetails;
