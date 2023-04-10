import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Font } from '~assets/fonts';
import {styles} from './QuantityComfirmScreen.styles';
import {HeaderCustomize} from '~components';

export const QuantityComfirmScreen: React.FC<any> = props => {
  const {} = props;
  return (
    <><HeaderCustomize type={'Normal'} title={'Túi Bio Bag 4 ly, màu trắng sứ, không nhám'} />
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
            <SafeAreaView >
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
                  <TouchableOpacity style={styles.btnEdition}>
                    <Text style={styles.txtBtnCancel}>Hủy</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btnEditionSave}>
                    <Text style={styles.txtBtnSave}>Lưu</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btnEditionComfirm}>
                    <Text style={styles.txtBtnSave}>Xác nhận</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </SafeAreaView>
          </View>
        </View>
      </View>
    </>
  );
};
