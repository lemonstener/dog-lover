import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography, Divider, CircularProgress } from '@mui/material';
import { usePostDogsMatch } from '../hooks/useDogMatch';
import { useEffect } from 'react';
import { getFavorites } from '../../../shared/utils/getFavorites';
import { usePostDogs } from '../hooks/usePostDogs';
import { Dog } from '../../../API/responses/dog';
import { CakeOutlined, LocationOn, Pets, Save } from '@mui/icons-material';

interface DogMatchDialogProps {
    open: boolean;
    handleClose: () => void;
}

export const DogMatchDialog = ({ open, handleClose }: DogMatchDialogProps) => {
    const { mutate: mutateDogsMatch, data: matchResult, isSuccess: dogsMatchSuccess, isLoading: isLoadingDogsMatch } = usePostDogsMatch();
    const { mutate: mutateDogsPost, data: dogsPostResult, isLoading: isLoadingDogsPost } = usePostDogs();
    const isLoading = isLoadingDogsMatch || isLoadingDogsPost;
    const match = dogsPostResult?.data?.[0] ?? {} as Dog;

    useEffect(() => {
        const favorites = getFavorites();
        if (favorites.length) mutateDogsMatch(favorites);
    }, [mutateDogsMatch])

    useEffect(() => {
        if (matchResult?.data.match) mutateDogsPost([matchResult?.data.match])
    }, [dogsMatchSuccess, matchResult?.data.match, mutateDogsPost])

    return (
        <Dialog open={open} sx={{ minHeigh: 250 }}>
            <DialogTitle>{isLoading ? 'Fetching a match...' : `Your match is ${match.name}!`}</DialogTitle>
            <Divider />
            <DialogContent>
                {isLoading ?
                    <CircularProgress /> :
                    <>
                        <img width={250} height={200} src={match.img} />
                        <Typography textAlign={'center'} variant="body2" sx={{ color: 'text.secondary' }}>
                            {match.breed} <Pets sx={{ fontSize: 12 }} />
                        </Typography>
                        <Typography textAlign={'center'} variant="body2" sx={{ color: 'text.secondary' }}>
                            {match.age} <CakeOutlined sx={{ fontSize: 12 }} />
                        </Typography>
                        <Typography textAlign={'center'} variant="body2" sx={{ color: 'text.secondary' }}>
                            {match.zip_code}
                            <LocationOn sx={{ fontSize: 12 }} />
                        </Typography>
                    </>}
            </DialogContent>
            <DialogActions>
                <Button variant={'contained'} onClick={() => {
                    const favorites = getFavorites();
                    if (favorites.length) mutateDogsMatch(favorites);
                }} color="primary">
                    Find another match
                </Button>
                <Button variant={'contained'} onClick={handleClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};