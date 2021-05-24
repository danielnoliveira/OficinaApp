/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import ListOrcamento from './src/components/ListOrcamento';
import ModalItem from './src/components/ModalItem';

const {width} = Dimensions.get('window');

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [dataSelected, setDataSelected] = useState(null);
  const [orcamento, setOrcamento] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const {data} = await axios.get(
        'https://my-json-server.typicode.com/codificar/oficina/proposals',
      );
      setOrcamento([...data]);
    };
    fetchData();
  }, []);
  return (
    <View style={styles.centeredView}>
      {orcamento === null ? (
        <ActivityIndicator size="large" color="gray" />
      ) : (
        <View style={styles.contentList}>
          <ModalItem
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            dataSelected={dataSelected}
          />
          <Text style={styles.headerTitle}>Lista de Orçamentos</Text>
          <ListOrcamento
            data={orcamento}
            modalshow={data => {
              setModalVisible(!modalVisible);
              setDataSelected(data);
            }}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
  },
  contentList: {
    width: width * 1,
    height: '100%',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 30,
    height: 50,
    paddingTop: 10,
  },
});

export default App;
