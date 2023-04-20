import React from 'react';
import { Modal, View, Text, TextInput, Pressable } from 'react-native';
import { styles } from './ModalAddBlow.Styles';

export const ModalAddBlow : React.FC<any> = (props) => {
  const {openModal, setOpenModal} = props;

  return (
    <Modal transparent visible={openModal} animationType="none">
      <View style={styles.containerModal}>
        <View style={styles.containerInfo}>
          <View style={styles.containerBody}>
            <Text style={styles.text3}>Cuộn số</Text>
            <TextInput placeholder={'Nhập...'} style={styles.textInput} />
            <Text style={styles.text3}>Nhấn vào ô “Đạt” để đổi trạng thái sang “Không đạt”, tiếp tục nhấn vào ô để đổi trạng thái sang “Tương đối”.</Text>
            <View style={styles.containerBody2}>
              <Text style={styles.textModal1}>Tiêu chí</Text>
              <Text style={styles.textModal2}>Số liệu</Text>
              <Text style={styles.textModal3}>Đánh giá</Text>
              <Text style={styles.textModal4}>Số hiệu lực</Text>
            </View>
            <View style={styles.containerBody3}>
              <Text style={styles.textCriteria}>Trọng lượng</Text>
              <Text style={styles.textData}>30</Text>
              <View style={styles.containerBtnEvaluate}>
                <Pressable style={styles.btnEvaluate}>
                  <Text style={styles.textBtn}>Đạt</Text>
                </Pressable>
              </View>
              <TextInput style={styles.textValidNumber} placeholder={'Nhập'} />
            </View>
            <View style={styles.line} />
            <View style={styles.containerBody3}>
              <Text style={styles.textCriteria}>Chiều dài</Text>
              <Text style={styles.textData}>10</Text>
              <View style={styles.containerBtnEvaluate}>
                <Pressable style={styles.btnEvaluate}>
                  <Text style={styles.textBtn}>Đạt</Text>
                </Pressable>
              </View>
              <TextInput style={styles.textValidNumber} placeholder={'Nhập'} />
            </View>
            <View style={styles.line} />
            <View style={styles.containerBody3}>
              <Text style={styles.textCriteria}>Chiều ngang</Text>
              <Text style={styles.textData}>30</Text>
              <View style={styles.containerBtnEvaluate}>
                <Pressable style={styles.btnEvaluate}>
                  <Text style={styles.textBtn}>Đạt</Text>
                </Pressable>
              </View>
              <TextInput style={styles.textValidNumber} placeholder={'Nhập'} />
            </View>
            <View style={styles.line} />
            <View style={styles.containerBody3}>
              <Text style={styles.textCriteria}>Xếp hông</Text>
              <Text style={styles.textData}>30</Text>
              <View style={styles.containerBtnEvaluate}>
                <Pressable style={styles.btnEvaluate}>
                  <Text style={styles.textBtn}>Đạt</Text>
                </Pressable>
              </View>
              <TextInput style={styles.textValidNumber} placeholder={'Nhập'} />
            </View>
            <View style={styles.line} />
            <View style={styles.containerBody3}>
              <Text style={styles.textCriteria}>Độ dày</Text>
              <Text style={styles.textData}>30</Text>
              <View style={styles.containerBtnEvaluate}>
                <Pressable style={styles.btnEvaluate}>
                  <Text style={styles.textBtn}>Đạt</Text>
                </Pressable>
              </View>
              <TextInput style={styles.textValidNumber} placeholder={'Nhập'} />
            </View>
            <View style={styles.line} />
            <View style={styles.containerBody3}>
              <Text style={styles.textCriteria}>Lăn gai</Text>
              <Text style={styles.textData}>30</Text>
              <View style={styles.containerBtnEvaluate}>
                <Pressable style={styles.btnEvaluate}>
                  <Text style={styles.textBtn}>Đạt</Text>
                </Pressable>
              </View>
              <TextInput style={styles.textValidNumber} placeholder={'Nhập'} />
            </View>
            <View style={styles.line} />
            <View style={styles.containerBody3}>
              <Text style={styles.textCriteria}>Màu in</Text>
              <Text style={styles.textData}>30</Text>
              <View style={styles.containerBtnEvaluate}>
                <Pressable style={styles.btnEvaluate}>
                  <Text style={styles.textBtn}>Đạt</Text>
                </Pressable>
              </View>
              <TextInput style={styles.textValidNumber} placeholder={'Nhập'} />
            </View>
            <View style={styles.line} />
            <View style={styles.containerBody3}>
              <Text style={styles.textCriteria}>Hình in</Text>
              <Text style={styles.textData}>30</Text>
              <View style={styles.containerBtnEvaluate}>
                <Pressable style={styles.btnEvaluate}>
                  <Text style={styles.textBtn}>Đạt</Text>
                </Pressable>
              </View>
              <TextInput style={styles.textValidNumber} placeholder={'Nhập'} />
            </View>
            <View style={styles.line} />
            <View style={styles.containerRow}>
              <Pressable style={styles.btnModalCancel} onPress={() => {setOpenModal(false)}}>
                <Text style={styles.txtModalSave}>Hủy</Text>
              </Pressable>
              <Pressable style={styles.btnSave}  onPress={() => {setOpenModal(false)}}>
                <Text style={styles.txtBtnSave}>Lưu</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};