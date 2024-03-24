import React, { useState } from 'react'
import { IWishList } from 'types';
import WishList from './components/WishList';
import { Box, Button, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChristmasBackground from 'pages/secret-santa/components/christmas-background';
import { sendMessage } from 'services/teleBot';
import { LoadingButton } from '@mui/lab';
import { toast } from 'react-toastify';

export default function SecretSanta() {

    const [loading, setLoading] = useState(false);

    const [wishLists, setWishLists] = useState<IWishList[]>([
      { id: 1, title: 'My Wishlist', items: ['Item 1', 'Item 2', 'Item 3'] },
    ]);
  
    const handleEditItem = (listId: number, itemIndex: number, editedItem: string) => {
      setWishLists((prevLists) =>
        prevLists.map((list) =>
          list.id === listId
            ? { ...list, items: list.items.map((item, index) => (index === itemIndex ? editedItem : item)) }
            : list
        )
      );
    };
  
    const handleRemoveItem = (listId: number, itemIndex: number) => {
      setWishLists((prevLists) =>
        prevLists.map((list) =>
          list.id === listId ? { ...list, items: list.items.filter((_, index) => index !== itemIndex) } : list
        )
      );
    };

    const handleAddItem = (listId: number, newItem: string) => {
      setWishLists((prevLists) =>
        prevLists.map((list) =>
          list.id === listId ? { ...list, items: [...list.items, newItem] } : list
        )
      );
    };

    const onSuccess = () => {
      setLoading(false);
      toast.success(
        `🚀 Successfully launched your wishlist into Santa's magical sleigh! 🎅`, 
        {
          position: 'bottom-center',
          autoClose: 5000,
        }
      )
    }

    const handleSubmitWishlist = async () => {
      setLoading(true)
      const allItemNames = wishLists.flatMap((list) => list.items).join(', ');
      await sendMessage("Be Tien's Christmas Wishlist" + allItemNames, onSuccess)
    };
  

    return (
      <div>
        <ChristmasBackground />
      
        <div className='flex justify-center items-center min-h-screen'>
          <Box className='max-w-10/12 w-600' paddingX="10px">
            <Typography align='center' fontWeight="800" fontSize="34px" color="white" className='!mb-5 gradient-text gold'>
              Bé Tiên's Christmas Wish Lists
            </Typography>



            {wishLists.map((list) => (
              <WishList
                key={list.id}
                list={list}
                onEditItem={handleEditItem}
                onRemoveItem={handleRemoveItem}
                onAddItem={handleAddItem}
              />
            ))}
            <LoadingButton
              onClick={handleSubmitWishlist}
              loading={loading}
              loadingPosition="end"
              endIcon={<FavoriteBorderIcon />}
              variant="contained"
              className='w-full !py-3 !bg-red-600'
            >
              Send your Wishlists to Santa 
            </LoadingButton>
          </Box>
        </div>
      </div>
    )
}
