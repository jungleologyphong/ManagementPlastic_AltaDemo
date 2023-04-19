import { useState } from 'react';
import localStorage from 'redux-persist/es/storage';

export const InfoScreenLogic = () => {

  const [isEdited, setEdited] = useState(true);
  const [checkEditInfo, setEditedInfo] = useState(false);
 
  interface FormType {
    idStaff: string,
    fullname: string,
    group: string,
    idGroup: string,
    gender: string,
    CMND: string,
    gmail: string,
    phone: string,
    date: string,
    address: string
  }

  const [newData, setNewData] = useState<FormType>({
    idStaff: '',
    fullname: '',
    group: '',
    idGroup: '',
    gender: '',
    CMND: '',
    gmail: '',
    phone: '',
    date: '',
    address: ''
  });

  const [formData, setFormData] = useState<FormType>({
    idStaff: 'CN01',
    fullname: 'Nguyễn Viết Anh Nguyên',
    group: 'Thổi',
    idGroup: '1',
    gender: 'Nữ',
    CMND: '124532145632',
    gmail: 'nguyen.nguyen@alta.com.vn',
    phone: '0954126514',
    date: '21/12/1993',
    address: '220/54/12 Âu Cơ, P.9, Q.Tân Bình, TP.Hồ Chí Minh'
  });

  const handleEdited = () => {
    setEdited(!isEdited);
  };

  const [idStaff, setIdStaff] = useState('CN01');
  const [fullname, setFullname] = useState('Nguyễn Viết Anh Nguyên');
  const [group, setGroup] = useState('Thổi');
  const [idGroup, setIdGroup] = useState('1');
  const [gender, setGender] = useState('Nữ');
  const [CMND, setCMND] = useState('124532145632');
  const [gmail, setGmail] = useState('nguyen.nguyen@alta.com.vn');
  const [phone, setPhone] = useState('0954126514');
  const [date, setDate] = useState('21/12/1993');
  const [address, setAddress] = useState('220/54/12 Âu Cơ, P.9, Q.Tân Bình, TP.Hồ Chí Minh');

  const handleFieldChange = () => {
    setNewData(({ 
      idStaff: formData.idStaff === idStaff ? formData.idStaff : idStaff,
      fullname: formData.fullname === fullname ? formData.fullname : fullname,
      group: formData.group === group ? formData.group : group,
      idGroup: formData.idGroup === idGroup ? formData.idGroup : idGroup,
      gender: formData.gender === gender ? formData.gender : gender,
      CMND: formData.CMND === CMND ? formData.CMND : CMND,
      gmail: formData.gmail === gmail ? formData.gmail : gmail,
      phone: formData.phone === phone ? formData.phone : phone,
      date: formData.date === date ? formData.date : date,
      address: formData.address === address ? formData.address : address
    }));
    setEditedInfo(true);
  };

  return {isEdited, setEdited, handleEdited, formData, setFormData, handleFieldChange, 
    setIdStaff, setFullname, setGroup, setIdGroup, setGender, setCMND, setGmail, setAddress, setPhone, setDate, newData, checkEditInfo
  };
};