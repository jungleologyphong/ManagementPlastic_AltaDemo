import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TextProps, TouchableOpacity, Text, Image, FlatList, SafeAreaView, ScrollView} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Font } from '~assets/fonts';
import { getSource } from '~assets';
import { HeaderCustomize } from '~components/headercustomize/HeaderCustomize';
import { values } from 'lodash';

export interface FlatListCustomizeProps extends TextProps {
    titleParams ? : string,
    titleHeaders ? : string,
    typeHeaders ? : string,
    headersParams ? : string[];
    dataParams ? : object[];
}

export const FlatlistCustomize: React.FC<any> = (props) => {
  const {headersParams, titleParams, titleHeaders, typeHeaders, typeFlatlist, dataParams} = props;
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [unFocus, setUnFocus] = useState(false);
    
  const loadData = () => {
    setData(dataParams);
    setUnFocus(!unFocus);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <><HeaderCustomize type={typeHeaders} title={titleHeaders} />
      <View style={styles.container}>
        <View style={styles.table}>
          <Text style={styles.titleParams}>{titleParams}</Text>
          <View style={{flexDirection: 'row'}}>
            {/**/}
          </View>
          <View style={styles.row}>
            {headersParams.map((header: string, index: number) => (
              <Text key={index} style={styles.header}>
                {header}
              </Text>
            ))}
          </View>
          <FlatList
            nestedScrollEnabled={true}
            data={data.slice((page - 1) * 5, page * 5)}
            renderItem={({ item }) => (
              <View style={styles.rowData}>
                {Object.keys(item).map((key, index) => (
                  <Text key={index} style={styles.cell}>
                    {item[key]}
                  </Text>
                ))}
              </View>
            )} keyExtractor={(item, index) => index.toString()} />
          <View style={styles.containerPagination}>
            <TouchableOpacity>
              <Text style={styles.btnPrevious}>{'<'}</Text>
            </TouchableOpacity>
            {Array(Math.ceil(data.length / 5))
              .fill(data)
              .map((_, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.paginationItem,
                    page === index + 1 && styles.paginationItemSelected,
                  ]}
                  onPress={() => setPage(index + 1)}>
                  <Text style={[styles.txtPage, page === index + 1 && styles.txtPageFocused]}>{index + 1}</Text>
                </TouchableOpacity>
              ))}
            <TouchableOpacity>
              <Text style={styles.btnNext}>{'>'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  table: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    backgroundColor: '#FFFFFF',
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowRadius: 16,
    margin: 24,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 24,
    paddingBottom: 10,
    width: wp('50%'),
    height: hp('58%'),
  },
  row: {
    flexDirection: 'row',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderColor: '#007173',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    backgroundColor: '#007173',
    marginTop: 16,
    padding: 16,
  },
  rowData: {
    flex: 1,
    flexDirection: 'row',
  },
  header: {
    flex: 1,
    fontFamily: Font.LexendDeca_Regular,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  cell: {
    flex: 1,
    fontFamily: Font.LexendDeca_Thin,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
    borderWidth: 0.5,
    borderColor: '#F0F0F0',
    padding: 16,
  },
  titleParams: {
    fontFamily: Font.LexendDeca_Thin,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 28,
    textAlign: 'center',
    color: '#007173', 
  },
  containerPagination: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    alignSelf: 'flex-end',
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paginationItem: {
    color: 'black',
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  paginationItemSelected: {
    flexDirection: 'row',
    backgroundColor: '#007173',
  },
  txtPage: {
    color: '#007173',
    fontFamily: Font.LexendDeca_Thin,
    fontStyle: 'normal',
    fontWeight: '200',
    textAlign: 'center',
    fontSize: 20,
  },
  txtPageFocused: {
    color: '#FFFFFF',
    fontFamily: Font.LexendDeca_Thin,
    fontStyle: 'normal',
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 20,
  },
  btnNext: {
    color: '#007173',
    marginHorizontal: 10,
    fontFamily: Font.LexendDeca_Thin,
    fontStyle: 'normal',
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 25,
  },
  btnPrevious: {
    color: '#007173',
    marginHorizontal: 10,
    fontFamily: Font.LexendDeca_Thin,
    fontStyle: 'normal',
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 25,
  }
});