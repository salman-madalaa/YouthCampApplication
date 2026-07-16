import {
  ListItemButton,
  ListItemText,
} from '@mui/material';

interface NavItemProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

function NavItem({
  label,
  selected,
  onClick,
}: NavItemProps) {
  return (
    <ListItemButton
      selected={selected}
      onClick={onClick}
    >
      <ListItemText primary={label} />
    </ListItemButton>
  );
}

export default NavItem;