import React, {useState} from 'react';
import {View, Text, ScrollView, Modal, Pressable, TextInput} from 'react-native';
import {TouchableOpacity } from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './ModalComfirmQuantity.styles';

const ModalComfirm : React.FC<any> = (props) => {
  const {showModal, setIsShowModal} = props;
  return (
    <Modal transparent visible={showModal} animationType="slide">
      <View style={styles.containerModal}>
        <View style={styles.containerInfo}>
          <Text style={styles.title}>Xác nhận duyệt báo cáo sản lượng của công nhân</Text>
          <Text style={styles.content3}>“Bạn có muốn duyệt báo cáo sản lượng này của công{'\n'}nhân này không"</Text>
          <View style={styles.containerRow}>
            <Pressable style={styles.btnEditionSave} onPress={()=> setIsShowModal(false)}>
              <Text style={styles.txtBtnSave}>Hủy</Text>
            </Pressable>
            <Pressable style={styles.btnEditionComfirm} onPress={()=> setIsShowModal(false)}>
              <Text style={styles.txtBtnSave}>Xác nhận</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const ModalRefuse : React.FC<any> = (props) => {
  const {isShowModalRefuse, setModalRefuse} = props;
  return (
    <Modal transparent visible={isShowModalRefuse} animationType="slide">
      <View style={styles.containerModal}>
        <View style={styles.containerRefuse}>
          <Text style={styles.titleRefuseRed}>Từ chối báo cáo của công nhân</Text>
          <Text style={styles.titleRefuse}>Lý do từ chối</Text>
          <TextInput style={styles.textInputRefuse} placeholder='Nhập' />
          <View style={styles.containerRow}>
            <Pressable style={styles.btnEditionSave} onPress={()=> setModalRefuse(false)}>
              <Text style={styles.txtBtnSave}>Hủy</Text>
            </Pressable>
            <Pressable style={styles.btnEditionComfirm} onPress={()=> setModalRefuse(false)}>
              <Text style={styles.txtBtnSave}>Xác nhận</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export const ModalComfirmQuantity: React.FC<any> = props => {
  const {showModalComfirm, setShowModalComfirm} = props;
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowModalRefuse, setModalRefuse] = useState(false);

  return (
    <><ModalComfirm showModal={isShowModal} setIsShowModal={setIsShowModal} />
      <ModalRefuse isShowModalRefuse={isShowModalRefuse} setModalRefuse={setModalRefuse} />
      <Modal transparent visible={showModalComfirm} animationType="slide">
        <View style={styles.container}>
          <View style={styles.table}>
            <View style={styles.margin}>
              <Text style={styles.title}>Thông tin công nhân</Text>
              <View style={styles.containerIdStaff}>
                <Text style={styles.txtInfoStaff}>Mã công nhân:</Text>
                <Text style={styles.txtInfoStaff2}>CN01</Text>
              </View>
              <View style={styles.containerIdStaff}>
                <Text style={styles.txtInfoStaff}>Tên công nhân:</Text>
                <Text style={styles.txtInfoStaff2}>Nguyễn Văn A</Text>
              </View>
              <Text style={styles.line}></Text>
            </View>
            <View style={styles.containerScrollview}>
              <SafeAreaView>
                <ScrollView>
                  <Text style={styles.title}>Trọng lượng carton</Text>
                  <View style={styles.containerRow}>
                    <View style={styles.containerColumn}>
                      <Text style={styles.content}>Từ</Text>
                      <View style={styles.content2}>
                        <Text style={styles.text}>10</Text>
                      </View>
                    </View>
                    <View style={styles.containerColumn2}>
                      <Text style={styles.content}>Đến</Text>
                      <View style={styles.content2}>
                        <Text style={styles.text}>10</Text>
                      </View>
                    </View>
                  </View>
                  {/*Thành phẩm*/}
                  <Text style={styles.title}>Thành phẩm</Text>
                  <View style={styles.containerRow}>
                    <View style={styles.containerColumn}>
                      {/*Thùng*/}
                      <Text style={styles.content}>Thùng</Text>
                      <View style={styles.content2}>
                        <Text style={styles.text}>10</Text>
                      </View>
                      <Text style={styles.content}>Từ số</Text>
                      <View style={styles.content2}>
                        <Text style={styles.text}>10</Text>
                      </View>
                    </View>
                    <View style={styles.containerColumn2}>
                      <Text style={styles.content}>Kg</Text>
                      <View style={styles.content2}>
                        <Text style={styles.text}>10</Text>
                      </View>
                      <Text style={styles.content}>Đến số</Text>
                      <View style={styles.content2}>
                        <Text style={styles.text}>10</Text>
                      </View>
                    </View>
                  </View>
                  <Text style={styles.title}>Phế</Text>
                  <View style={styles.containerRow}>
                    <View style={styles.containerColumn}>
                      <Text style={styles.content}>Loại phế</Text>
                      <View style={styles.content2}>
                        <Text style={styles.text}>10</Text>
                      </View>
                      <Text style={styles.content}>Loại phế</Text>
                      <View style={styles.content2}>
                        <Text style={styles.text}>10</Text>
                      </View>
                    </View>
                    <View style={styles.containerColumn2}>
                      <Text style={styles.content}>Số lượng (Kg)</Text>
                      <View style={styles.content2}>
                        <Text style={styles.text}>10</Text>
                      </View>
                      <Text style={styles.content}>Số lượng (Kg)</Text>
                      <View style={styles.content2}>
                        <Text style={styles.text}>10</Text>
                      </View>
                    </View>
                  </View>
                  <Text style={styles.title}>Trọng lượng tổn</Text>
                  <View style={styles.containerRow}>
                    <View style={styles.containerColumn}>
                      <Text style={styles.content}>Đầu ca</Text>
                      <View style={styles.content2}>
                        <Text style={styles.text}>10</Text>
                      </View>
                    </View>
                    <View style={styles.containerColumn2}>
                      <Text style={styles.content}>Cuối ca</Text>
                      <View style={styles.content2}>
                        <Text style={styles.text}>10</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.containerBtnEdition}>
                    <Pressable style={styles.btnEdition} onPress={() => setShowModalComfirm(false)}>
                      <Text style={styles.txtBtnCancel}>Hủy</Text>
                    </Pressable>
                    <Pressable style={styles.btnEditionSave} onPress={() => setModalRefuse(true)}>
                      <Text style={styles.txtBtnSave}>Từ chối</Text>
                    </Pressable>
                    <Pressable style={styles.btnEditionComfirm} onPress={() => { setIsShowModal(true); } }>
                      <Text style={styles.txtBtnSave}>Xác nhận</Text>
                    </Pressable>
                  </View>
                </ScrollView>
              </SafeAreaView>
            </View>
          </View>
        </View>
      </Modal></>
  );
};
