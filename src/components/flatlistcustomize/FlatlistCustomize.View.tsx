import React from 'react';
import {View, TextProps, TouchableOpacity, Text, FlatList, Pressable, Modal, TextInput} from 'react-native';
import {styles} from './FlatlistCustomize.Style';
import {FlatlistCustomizeLogic} from './FlatlistCustomize.Logic';
import {ModalComfirmQuantity} from '~view/main/quantity/ModalComfirm/ModalComfirmQuantity.view';
import {FilterCustomize} from '~components/filtercustomize';

export interface FlatListCustomizeProps extends TextProps {
    titleColumn1 ? : string,
    titleColumn2 ? : string,
    titleColumn3 ? : string,
    titleParams ? : string,
    titleHeaders ? : string,
    otherColumns ? : string,
    typeFlatlist ? : 'Normal' | 'Checked',
    dataParams ? : [];
}

export const FlatlistCustomize: React.FC<any> = (props) => {
  const {titleColumn1, titleColumn2, titleColumn3, titleParams, typeFlatlist, dataParams, dropdownParams, ...otherColumns} = props;

  const { 
    showModalComfirm, setShowModalComfirm, handleModalComfirm, page, setPage, filterData, 
    openModal, setOpenModal, value, setValue, headersParams, headersParams2} = FlatlistCustomizeLogic({titleColumn1, titleColumn2, titleColumn3, ...otherColumns});

  const ModalAddBlow : React.FC<any> = (props) => {
    const {} = props;
  
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
                <Pressable style={styles.btnModalCancel} onPress={() => {setOpenModal(false); }}>
                  <Text style={styles.txtModalSave}>Hủy</Text>
                </Pressable>
                <Pressable style={styles.btnSave}  onPress={() => {setOpenModal(false); }}>
                  <Text style={styles.txtBtnSave}>Lưu</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    typeFlatlist === 'Normal' ? <>
      <View style={styles.container}>
        <View style={styles.table}>
          <Text style={styles.titleParams}>{titleParams}</Text>
          <FilterCustomize dropdownParams={dropdownParams}/>
          <View style={styles.row}>
            {headersParams.map((items: string) => {
              return (
                <Text style={styles.headerColumn1}>
                  {items.column}
                </Text>
              );
            })}
          </View>
          <ModalComfirmQuantity showModalComfirm={showModalComfirm} setShowModalComfirm={handleModalComfirm} />
          <FlatList
            nestedScrollEnabled={true}
            data={ value === 'Default' ? dataParams.slice((page - 1) * 5, page * 5) : filterData}
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
          <View style={styles.containerPagination}>
            <TouchableOpacity onPress={() => setPage(page - 1)}>
              <Text style={styles.btnPrevious}>{'<'}</Text>
            </TouchableOpacity>
            {Array(Math.ceil(dataParams.length / 5))
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
      <ModalAddBlow showModal={openModal} />
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
            {headersParams2.map((items: string) => {
              return (
                <Text style={styles.headerColumn1}>
                  {items.column}
                </Text>
              );
            })}
          </View>
          {dataParams === null ? 
          <>
            <View style={styles.containerBtnEdition}>
              <TouchableOpacity style={styles.btnEditionSave} onPress={() => {setOpenModal(true);}}>
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