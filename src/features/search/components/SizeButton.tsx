import { Check, ExpandLess, ExpandMore } from "@mui/icons-material";
import { Button, ButtonProps, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

export const SizeButton = (props: ButtonProps) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const { watch, setValue } = useFormContext();
    const watchSize = watch('size');

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const setSize = (size: string) => {
        setValue('size', size);
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
                {watchSize}
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
                {['25', '50', '100'].map((v) => (
                    <MenuItem
                        key={`size-${v}`}
                        onClick={() => setSize(v)}
                    >
                        {v}
                        {watchSize === v && <Check sx={{ fontSize: 16, ml: 1 }} />}
                    </MenuItem>
                ))}
            </Menu>
        </>

    )
}