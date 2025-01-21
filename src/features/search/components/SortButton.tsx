import { Button, ButtonProps, Menu, MenuItem } from "@mui/material"
import { useState } from "react";
import { useRecoilState } from "recoil";
import { allFiltersAtom } from "../state/allFiltersAtom";
import { Sort } from "../enums/Sort";
import { Check, ExpandLess, ExpandMore } from "@mui/icons-material";

export const SortButton = (props: ButtonProps) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const [filters, setFilters] = useRecoilState(allFiltersAtom);

    const handleClose = () => {
        setAnchorEl(null);
    };

    const setSorting = (type: Sort) => {
        setFilters({ ...filters, sort: type });
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
                {filters.sort}
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
                        {filters.sort === o && <Check sx={{ fontSize: 16, ml: 1 }} />}
                    </MenuItem>
                ))}
            </Menu>
        </>

    )
}