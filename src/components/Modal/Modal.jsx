import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

export const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  justifyContend: 'center',
  alignItems: 'center',
  width: 350,
  height: 300,
  // bgcolor: 'background.paper',
  bgcolor: '#fff',
  border: '1px solid #000',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

const ModalWindow = ({ children, ...modalProps }) => {
  const { modalShow, modalHide } = modalProps;
  return (
    <Modal
      open={modalShow}
      onClose={modalHide}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>{children}</Box>
    </Modal>
  );
};

export default ModalWindow;
