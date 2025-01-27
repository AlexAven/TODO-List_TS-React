import styled from 'styled-components';
import { IoTrashBin, IoTrashBinOutline } from 'react-icons/io5';

import useTheme from '../hooks/useTheme';

const RemoveBtnWrapper = styled.div`
  cursor: pointer;
`;

interface RemoveBtnProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const RemoveBtn: React.FC<RemoveBtnProps> = ({ onClick } ) => {
  const [theme] = useTheme();
  
  return (
    <RemoveBtnWrapper onClick={onClick}>
      {theme === 'light' ? <IoTrashBinOutline size={'2.2rem'} /> : <IoTrashBin size={'2.2rem'} />}
    </RemoveBtnWrapper>);
};

export default RemoveBtn;
