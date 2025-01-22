import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';
import { usePostDogsMatch } from '../hooks/useDogMatch';
import { useEffect } from 'react';
import { getFavorites } from '../../../shared/utils/getFavorites';
import { usePostDogs } from '../hooks/usePostDogs';

interface DogMatchDialogProps {
    open: boolean;
    handleClose: () => void;
}

export const DogMatchDialog = ({ open, handleClose }: DogMatchDialogProps) => {
    const { mutate: mutateDogsMatch, data: matchResult, isSuccess: dogsMatchSuccess, isLoading: isLoadingDogsMatch } = usePostDogsMatch();
    const { mutate: mutateDogsPost, data: dogsPostResult, isLoading: isLoadingDogsPost } = usePostDogs();

    useEffect(() => {
        const favorites = getFavorites();
        if (favorites.length) mutateDogsMatch(favorites);
    }, [mutateDogsMatch])

    useEffect(() => {
        if (matchResult?.data.match) mutateDogsPost([matchResult?.data.match])
    }, [dogsMatchSuccess, matchResult?.data.match, mutateDogsPost])

    return (
        <Dialog open={open}>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogContent>
                <p>This is a simple Material UI dialog example.</p>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};