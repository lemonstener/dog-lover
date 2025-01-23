import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography, Divider, CircularProgress, Box } from '@mui/material';
import { usePostDogsMatch } from '../hooks/useDogMatch';
import { useEffect } from 'react';
import { getFavorites } from '../../../shared/utils/getFavorites';
import { usePostDogs } from '../hooks/usePostDogs';
import { Dog } from '../../../API/responses/dog';
import { CakeOutlined, LocationOn, Pets } from '@mui/icons-material';

interface DogMatchDialogProps {
    open: boolean;
    handleClose: () => void;
}

export const DogMatchDialog = ({ open, handleClose }: DogMatchDialogProps) => {
    const { mutate: mutateDogsMatch, data: matchResult, isSuccess: dogsMatchSuccess, isLoading: isLoadingDogsMatch } = usePostDogsMatch();
    const { mutate: mutateDogsPost, data: dogsPostResult, isLoading: isLoadingDogsPost } = usePostDogs();
    const isLoading = isLoadingDogsMatch || isLoadingDogsPost;
    const { name, img, breed, zip_code, age } = dogsPostResult?.data?.[0] ?? {} as Dog;

    useEffect(() => {
        const favorites = getFavorites();
        if (favorites.length && open) mutateDogsMatch(favorites);
    }, [mutateDogsMatch, open])

    useEffect(() => {
        if (matchResult?.data.match && open) mutateDogsPost([matchResult?.data.match])
    }, [dogsMatchSuccess, matchResult?.data.match, mutateDogsPost, open])

    return (
        <Dialog open={open} sx={{ minHeigh: 250 }}>
            <DialogTitle>{isLoading ? 'Fetching a match...' : `Your match is ${name}!`}</DialogTitle>
            <Divider />
            <DialogContent>
                {isLoading ?
                    <Box>
                        <CircularProgress size="12rem" />
                    </Box>
                    :
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 400 }}>
                        <Box
                            component={'img'}
                            src={img}
                            alt={`Image of ${name}`}
                            sx={{
                                height: 280,
                                maxWidth: '100%',
                            }}
                        />
                        <Box sx={{ py: 1, textAlign: 'center' }}>
                            <Typography gutterBottom variant="h5" component="div">
                                {name}
                            </Typography>
                            <Typography sx={{ xs: '1.3rem', lg: '1rem' }} >
                                {breed} <Pets sx={{ fontSize: 12 }} />
                            </Typography>
                            <Typography sx={{ xs: '1.3rem', lg: '1rem' }} >
                                {age} <CakeOutlined sx={{ fontSize: 12 }} />
                            </Typography>
                            <Typography sx={{ xs: '1.3rem', lg: '1rem' }} >
                                {zip_code}
                                <LocationOn sx={{ fontSize: 12 }} />
                            </Typography>
                        </Box>
                    </Box>}
            </DialogContent>
            <Divider />
            <DialogActions>
                <Button variant={'contained'} onClick={handleClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};