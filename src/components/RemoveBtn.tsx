import styled from 'styled-components';
import { IoTrashBinOutline } from 'react-icons/io5';

const RemoveBtnWrapper = styled.div`
  cursor: pointer;
`;

interface RemoveBtnProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const RemoveBtn: React.FC<RemoveBtnProps> = ({ onClick }) => {
  return (
    <RemoveBtnWrapper onClick={onClick}>
      <IoTrashBinOutline size={'2.2rem'} />
    </RemoveBtnWrapper>
  );
};

export default RemoveBtn;
