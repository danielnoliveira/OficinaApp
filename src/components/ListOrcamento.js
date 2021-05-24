import React from 'react';
import {TouchableOpacity, Text, FlatList, StyleSheet, View} from 'react-native';

const Item = ({customer, seller, value, description, modalshow}) => (
  <TouchableOpacity
    style={styles.item}
    onPress={() => modalshow({customer, seller, value, description})}>
    <View style={[styles.ContainerSubItem, {flex: 2}]}>
      <Text style={styles.itemPerson}>Vendedor:{seller}</Text>
      <Text style={styles.itemPerson}>Cliente:{customer}</Text>
    </View>
    <View style={[styles.ContainerSubItem, {flex: 1, alignItems: 'center'}]}>
      <Text style={styles.itemValue}>{value}</Text>
    </View>
  </TouchableOpacity>
);

export default function ListOrcamento({data, modalshow}) {
  const renderItem = ({item}) => (
    <Item
      customer={item.customer}
      seller={item.seller}
      value={item.value}
      description={item.description}
      modalshow={modalshow}
    />
  );

  return (
    <FlatList
      style={styles.itemList}
      contentContainerStyle={styles.itemListContent}
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({
  itemList: {
    flex: 1,
    width: '100%',
  },
  itemListContent: {
    width: '100%',
  },
  item: {
    marginHorizontal: '5%',
    width: '90%',
    height: 80,
    backgroundColor: 'white',
    marginVertical: 10,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  ContainerSubItem: {
    justifyContent: 'center',
  },
  itemPerson: {
    fontSize: 16,
    color: 'black',
    height: '40%',
    fontWeight: 'bold',
  },
  itemValue: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
});
