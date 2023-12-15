import React, { useState } from 'react';
import { Button, TextField, Box, Stack } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import BackspaceIcon from '@mui/icons-material/Backspace';
import DoneIcon from '@mui/icons-material/Done';

type WishListItemProps = {
  item: string;
  onEdit: (editedItem: string) => void;
  onRemove: () => void;
};

const WishListItem: React.FC<WishListItemProps> = ({ item, onEdit, onRemove }) => {
  const [isEditing, setEditing] = useState(false);
  const [editedItem, setEditedItem] = useState(item);

  const handleEdit = () => {
    onEdit(editedItem);
    setEditing(false);
  };

  return (
    <Box mb={2} display="flex" alignItems="center" justifyContent="space-between">
      {isEditing ? (
        <>
          <TextField
            variant="outlined"
            size="medium"
            value={editedItem}
            onChange={(e) => setEditedItem(e.target.value)}
            className='max-w-sm w-3/5 !mr-2 text-orange-500 font-semibold flex-1'
            focused
            sx={{ input: { color: 'white', borderColor: 'white !important' } }}
          />
          <Button variant="contained" color="success" onClick={handleEdit}>
            <DoneIcon />
          </Button>
        </>
      ) : (
        <>
          <span className='max-w-sm w-3/5 text-orange-500 font-semibold'>{item}</span>
          <Stack direction="row" spacing={1}>
            <Button className='!p-2 !min-w-0' variant="outlined" color="primary" onClick={() => setEditing(true)}>
              <EditIcon />
            </Button>
            <Button className='!p-2 !min-w-0' variant="outlined" color="error" onClick={onRemove}>
              <BackspaceIcon />
            </Button>
          </Stack>
        </>
      )}
    </Box>
  );
};

export default WishListItem;
