import axios from 'axios';
import { useState, useEffect } from 'react';

export const QuantityScreenLogic = () => {

  const [data, setData] = useState([{
    idStaff: '',
    date: '',
    fullname: '',
    shift: '',
    cartonStart: Number,
    cartonEnd: Number,
    productBox: Number,
    box: Number,
    boxStart: Number,
    boxEnd: Number,
    typeProduct: '',
    quantityTypeProduct: Number,
    weightStart: Number,
    weightEnd: Number,
  }]);

  useEffect(() => {
    axios.get('https://6440dec2fadc69b8e0746e32.mockapi.io/api/data/employee')
      .then(function (response) {
        setData(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  },[]);

  const uniqueShifts = data.reduce((acc: string[], current: any) => {
    if (!acc.includes(current.shift)) {
      acc.push(current.shift);
    }
    return acc;
  }, []);

  const shiftData = uniqueShifts.map((shift: string) => {
    return { shift: shift };
  });

  const defaultShift = { shift: 'Default' };
  shiftData.unshift(defaultShift);

  return {data, shiftData};
};