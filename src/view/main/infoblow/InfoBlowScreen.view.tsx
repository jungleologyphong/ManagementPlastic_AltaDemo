import React from 'react';
import { View, Image, Text } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { getSource } from '~assets';
import { HeaderCustomizeView } from '~components';
import {styles} from './InfoBlowScreen.styles';

export const InfoBlowScreen: React.FC<any> = (props) => {

  const {} = props;
  return (
    <View style={styles.container}>
      <HeaderCustomizeView title={'Túi Bio Bag 4 ly, màu trắng sứ, không nhám'} type={'Normal'} />
      <Grid style={styles.containerGrid}>
        <Row style={styles.containerRow}>
          <Col style={styles.box}>
            <View>
              <Image source={getSource('INFO_BLOW')} style={styles.img} />
              <View style={styles.containerViewRow}>
                <View style={styles.column2}>
                  <Text style={styles.title}>Độ dày:</Text>
                  <Text style={styles.title}>Lăn gai:</Text>
                  <Text style={styles.title}>Quy cách:</Text>
                  <Text style={styles.title}>In:</Text>
                </View>
                <View style={styles.column}>
                  <Text style={styles.content}>350x300/50 xếp đáy</Text>
                  <Text style={styles.content}>55</Text>
                  <Text style={styles.content2}>NO</Text>
                  <View style={styles.row2}>
                    <View style={styles.dotRed}/>
                    <Text style={styles.content3}>Màu đỏ 1905C</Text>
                  </View>
                </View>
              </View>
            </View>
          </Col>
          <Col style={styles.box}>
            <View>
              <Image source={getSource('QUANTITYBLOW')} style={styles.img2} />
              <View style={styles.containerViewRow}>
                <View style={styles.column2}>
                  <View style={styles.row}>
                    <Text style={styles.title2}>Trọng lượng:</Text>
                    <Text style={styles.title3}>Tịnh: 12,47 kg{'\n'}Tổng: 12.60 kg</Text>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.title2}>Số lượng sản xuất:</Text>
                    <Text style={styles.title3}>1000/2000 kg{'\n'}100 bao{'\n'}160,345 cái</Text>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.title2}>Phế thổi:</Text>
                    <Text style={styles.title3}>100/165 kg</Text>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.title2}>Phế cắt:</Text>
                    <Text style={styles.title3}>Quai: 10/40 Kg{'\n'}Cắt: 5/21 Kg</Text>
                  </View>
                </View>
              </View>
            </View>
          </Col>
        </Row>
        <Row style={styles.containerRow}>
          <Col style={styles.box}>
            <View>
              <Image source={getSource('NOTES')} style={styles.img} />
              <View>    
                <Text style={styles.title4}>Độ dày dao động từ 50-60mic.</Text>
              </View>
            </View>
          </Col>
          <Col style={styles.box}>
            <View>
              <Image source={getSource('INTRODUCDE')} style={styles.img2} />          
              <Text style={styles.title4}>Có dán nhã phụ.</Text>
            </View>
          </Col>
        </Row>
      </Grid>
    </View>
  );
};
