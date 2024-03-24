import React, { useState } from 'react';
import WishListItem from './WishListItem';
import { Box, Button, TextField, Typography } from '@mui/material';
import { IWishList } from 'types';
import AddIcon from '@mui/icons-material/Add';

type WishListProps = {
  list: IWishList;
  onEditItem: (listId: number, itemIndex: number, editedItem: string) => void;
  onRemoveItem: (listId: number, itemIndex: number) => void;
  onAddItem: (listId: number, newItem: string) => void;
};

const WishList: React.FC<WishListProps> = ({ list, onEditItem, onRemoveItem, onAddItem }) => {
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      onAddItem(list.id, newItem);
      setNewItem('');
    }
  };

  return (
    <Box mb={3}>
      {list.items.map((item, index) => (
        <WishListItem
          key={index}
          item={item}
          onEdit={(editedItem) => onEditItem(list.id, index, editedItem)}
          onRemove={() => onRemoveItem(list.id, index)}
        />
      ))}
      <Box mt={1} display="flex" alignItems="center" justifyContent="space-between">
        <TextField
          // variant="outlined"
          size="small"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          className='flex-1'
          placeholder='You can leave another wishlist here...'
          focused
          sx={{ input: { color: 'white', borderColor: 'white !important' } }}
        />
        <Button variant="contained" color="primary" onClick={handleAddItem} className='!ml-2 '>
          <AddIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default WishList;
