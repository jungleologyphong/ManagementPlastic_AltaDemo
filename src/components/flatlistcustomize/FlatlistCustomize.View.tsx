import React from 'react';
import {View, TextProps, TouchableOpacity, Text, FlatList, Pressable, Modal, TextInput} from 'react-native';
import {styles} from './FlatlistCustomize.Style';
import {FlatlistCustomizeLogic} from './FlatlistCustomize.Logic';
import {ModalComfirmQuantity} from '~view/main/quantity/ModalComfirm/ModalComfirmQuantity.view';
import {FilterCustomize} from '~components/filtercustomize';
import {ModalAddBlow} from '~view/main/blow/ModalAddBlow/ModalAddBlow.View';

export interface FlatListCustomizeProps extends TextProps {
    titleColumn1 ? : string,
    titleColumn2 ? : string,
    titleColumn3 ? : string,
    titleParams ? : string,
    titleHeaders ? : string,
    otherColumns ? : string,
    dataLine ? : number,
    typeFlatlist ? : 'Normal' | 'Checked',
    dataParams ? : [];
}

const TitleColumn = (props: { column: string; }) => {
  const {column} = props;
  return (
    <Text style={styles.headerColumn1}>
      {column}
    </Text>
  );
};


export const FlatlistCustomize: React.FC<any> = (props) => {
  const {titleColumn1, titleColumn2, titleColumn3, titleParams, typeFlatlist, dataParams, dropdownParams, dataLine, ...otherColumns} = props;

  const { 
    showModalComfirm, setShowModalComfirm, handleModalComfirm, page, setPage, filterData, 
    openModal, setOpenModal, value, setValue, headersParams, headersParams2, IDStaff, setIdStaff} = FlatlistCustomizeLogic({titleColumn1, titleColumn2, titleColumn3, ...otherColumns});

  return (
    typeFlatlist === 'Normal' ? <>
      <View style={styles.container}>
        <View style={styles.table}>
          <Text style={styles.titleParams}>{titleParams}</Text>
          <FilterCustomize dropdownParams={dropdownParams}/>
          <View style={styles.row}>
            {headersParams.map((header, index) => {
              return (
                <TitleColumn key={index} column={header.column} />
              );
            })}
          </View>
          <FlatList
            nestedScrollEnabled={true}
            data={ value === 'Default' ? dataParams.slice((page - 1) * dataLine, page * dataLine) : filterData}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => {setShowModalComfirm(true); setIdStaff(item.idStaff);}}>
                <View style={styles.rowData}>
                  {Object.keys({date: item.date, fullname: item.fullname, shift: item.shift}).map((key, index) => (
                    <Text key={index} style={styles.cell}>
                      {item[key]}
                    </Text>
                  ))}
                </View>
              </TouchableOpacity>
            )} keyExtractor={(item, index) => index.toString()} />
          <ModalComfirmQuantity 
            showModalComfirm={showModalComfirm} 
            setShowModalComfirm={handleModalComfirm} 
            IDStaff={IDStaff} />
          <View style={styles.containerPagination}>
            <TouchableOpacity onPress={() => setPage(page - 1)}>
              <Text style={styles.btnPrevious}>{'<'}</Text>
            </TouchableOpacity>
            {Array(Math.ceil(dataParams.length / dataLine))
              .fill(dataParams)
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
            <TouchableOpacity onPress={() => setPage(page + 1)}>
              <Text style={styles.btnNext}>{'>'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </> : <>
      <View style={styles.container}>
        <View style={styles.table}>
          <Text style={styles.titleParams}>{titleParams}</Text>
          <Text style={styles.text}>Máy thổi</Text>
          {/* <DropDownPicker
            style={{borderWidth: 1, borderRadius: 5, borderColor: '#E0E0E0', width: 200, marginTop: 10}}
            placeholder='Chọn ca...'
            open={openDropdownMachine}
            value={value}
            items={dropdownParams}
            setOpen={setOpenDropdownMachine}
            setValue={setValue} /> */}
          <Text style={styles.text2}>Đánh giá</Text>
          <View style={styles.row}>
            {headersParams2.map((header, index) => {
              return (
                <TitleColumn key={index} column={header.column} />
              );
            })}            
          </View>
          <ModalAddBlow openModal={openModal} setOpenModal={setOpenModal} />
          {dataParams === null ? 
          <>
            <View style={styles.containerBtnEdition}>
              <TouchableOpacity style={styles.btnEditionSave} onPress={() => setOpenModal(true)}>
                <Text style={styles.txtBtnSave}>Thêm cuộn</Text>
              </TouchableOpacity>
              <View style={styles.btnEdition}>
                <Text style={styles.txtBtnCancel}>0%</Text>
              </View>
            </View>
          </> 
          : 
          <>
            <FlatList
              nestedScrollEnabled={true}
              data={ value === 'Default' ? dataParams : filterData}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => {setShowModalComfirm(true);}}>
                  <View style={styles.rowData}>
                    {Object.keys(item).map((key, index) => (
                      <Text key={index} style={styles.cell}>
                        {item[key]}
                      </Text>
                    ))}
                  </View>
                </TouchableOpacity>
              )} keyExtractor={(item, index) => index.toString()} />
          </>}
          <View style={styles.containerBtnEdition}>
            <TouchableOpacity style={styles.btnEditionSave} onPress={() => {setOpenModal(true);}}>
              <Text style={styles.txtBtnSave}>Thêm cuộn</Text>
            </TouchableOpacity>
            <View style={styles.btnEdition}>
              <Text style={styles.txtBtnCancel}>0%</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};