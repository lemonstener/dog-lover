import { Box, Skeleton } from "@mui/material";

export const DogCardSkeleton = () => {

    return (
        <Box
            sx={{
                width: { xs: '80%', sm: '50%', md: '33.3%', lg: '25%' },
                height: 300,
                my: 1,
                p: 2
            }}>
            <Skeleton
                variant={'rectangular'}
                sx={{
                    height: { xs: 180, sm: 180, md: 200, lg: 260 },
                    width: 250,
                    mx: 'auto'
                }} />
            <Box py={1}>
                <Skeleton sx={{ mx: 'auto', height: 40, width: '70%' }} />
                <Skeleton sx={{ mx: 'auto', height: 25, width: '30%' }} />
                <Skeleton sx={{ mx: 'auto', height: 25, width: '10%' }} />
                <Skeleton sx={{ mx: 'auto', height: 25, width: '40%' }} />
                <Skeleton sx={{ mx: 'auto', height: 45, width: '70%' }} />
            </Box>
        </Box>
    )
}