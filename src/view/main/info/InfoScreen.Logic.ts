import { useState, useEffect } from 'react';

export const InfoScreenLogic = () => {
  const [isEdited, setEdited] = useState(true);
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

  const [formData, setFormData] = useState<FormType>({
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

  useEffect(() => {
    fetch('https://6440dec2fadc69b8e0746e32.mockapi.io/api/data/users', {
      method: 'GET',
      headers: {'content-type':'application/json'},
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
    }).then(users => {
      setFormData({
        idStaff: users[0].idStaff,
        fullname: users[0].fullname,
        group: users[0].group,
        idGroup: users[0].idGroup,
        gender: users[0].gender,
        CMND: users[0].CMND,
        gmail: users[0].gmail,
        phone: users[0].phone,
        date: users[0].date,
        address: users[0].address
      });
    }).catch(error => {
      console.log(error);
    });
  },[]);

  const handleEdited = () => {
    setEdited(!isEdited);
  };

  return {isEdited, setEdited, handleEdited, formData, setFormData,};
};