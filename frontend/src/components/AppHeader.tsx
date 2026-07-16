import { AppBar, Toolbar, Typography } from '@mui/material';

interface AppHeaderProps {
  title: string;
  subtitle?: string;
}

function AppHeader({ title, subtitle }: AppHeaderProps) {
  return (
    <AppBar
      position="fixed"
      color="primary"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>
        <div>
          <Typography variant="h6" noWrap>
            {title}
          </Typography>

          {subtitle && (
            <Typography variant="body2">
              {subtitle}
            </Typography>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default AppHeader;