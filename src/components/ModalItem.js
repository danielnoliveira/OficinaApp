import React from 'react';
import {View, Text, Modal, StyleSheet, TouchableOpacity} from 'react-native';

export default function ModalItem({
  modalVisible,
  setModalVisible,
  dataSelected,
}) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={[styles.centeredView, {backgroundColor: 'transparent'}]}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Vendedor: {dataSelected?.seller}</Text>
          <Text style={styles.modalText}>
            Cliente: {dataSelected?.customer}
          </Text>
          <Text style={styles.modalText}>Valor:{dataSelected?.value}</Text>
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
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
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
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
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
});
