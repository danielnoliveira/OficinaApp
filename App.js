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
import ListOrcamento from './src/ListOrcamento';

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
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View
              style={[styles.centeredView, {backgroundColor: 'transparent'}]}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>
                  Vendedor: {dataSelected?.seller}
                </Text>
                <Text style={styles.modalText}>
                  Cliente: {dataSelected?.customer}
                </Text>
                <Text style={styles.modalText}>
                  Valor:{dataSelected?.value}
                </Text>
                <Text style={styles.modalText}>
                  Descrição: {dataSelected?.description}
                </Text>
                <TouchableOpacity
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Fechar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
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
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
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
