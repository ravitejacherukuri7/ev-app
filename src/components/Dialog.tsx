import React from 'react';

interface DialogProps {
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const Dialog: React.FC<DialogProps> = ({ title, message, onConfirm, onCancel }) => {
  return (
    <div className="dialog-backdrop">
      <div className="dialog-box">
        <h3>{title}</h3>
        <p>{message}</p>
        <div className="dialog-buttons" style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
          <button onClick={onConfirm} style={{ backgroundColor: 'green', color: 'white' }}>
            Confirm
          </button>
          <button onClick={onCancel} style={{ backgroundColor: 'gray', color: 'white' }}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;