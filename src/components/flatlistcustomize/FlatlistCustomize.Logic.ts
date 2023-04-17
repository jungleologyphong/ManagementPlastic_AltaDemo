import {useState} from 'react';

interface Column {
  column: string;
}

interface Props {
  titleColumn1: string;
  titleColumn2: string;
  titleColumn3: string;
  otherColumns: string;
}

export const FlatlistCustomizeLogic = (props: Props) => {
  const {titleColumn1, titleColumn2, titleColumn3, ...otherColumns} = props;

  const headersParams: Column[] = [
    {
      column: titleColumn1
    },
    {
      column: titleColumn2
    },
    {
      column: titleColumn3
    },
    ...Object.values(otherColumns).map(column => ({ column }))
  ];

  const headersParams2: Column[] = [
    {
      column: titleColumn1
    },
    {
      column: titleColumn2
    },
  ];

  const [showModalComfirm, setShowModalComfirm] = useState(false);
  const [page, setPage] = useState(1);
  const [unFocus, setUnFocus] = useState(false);
  const [filterData, setFilterData] = useState([]);

  const [openDropdownMachine, setOpenDropdownMachine] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [value, setValue] = useState('Default');

  const handleModalComfirm = () => {
    setShowModalComfirm(!showModalComfirm);    
  };

  const loadData = () => {
    setUnFocus(!unFocus);
  };

  return {
    showModalComfirm, setShowModalComfirm, handleModalComfirm, page, setPage, unFocus, setUnFocus, filterData, setFilterData, loadData, 
    openDropdownMachine, setOpenDropdownMachine, openModal, setOpenModal, value, setValue, headersParams, headersParams2
  };
};