import { Button, ButtonProps, Menu, MenuItem } from "@mui/material"
import { useState } from "react";
import { Sort } from "../enums/Sort";
import { Check, ExpandLess, ExpandMore } from "@mui/icons-material";
import { useFormContext } from "react-hook-form";

export const SortButton = (props: ButtonProps) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const { watch, setValue } = useFormContext();
    const watchSort = watch('sort');

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const setSorting = (type: Sort) => {
        setValue('sort', type);
        setValue('from', '0');
        handleClose();
    };


    return (
        <>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                endIcon={!anchorEl ? <ExpandLess /> : <ExpandMore />}
                {...props}
            >
                {watchSort}
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {Object.entries(Sort).map(([o, v]) => (
                    <MenuItem
                        key={o}
                        onClick={() => setSorting(o as Sort)}
                    >
                        {v}
                        {watchSort === o && <Check sx={{ fontSize: 16, ml: 1 }} />}
                    </MenuItem>
                ))}
            </Menu>
        </>
    )
}