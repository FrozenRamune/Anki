import React from 'react'
import { alpha, styled } from '@mui/material/styles'
import {
  Tabs, Tab, Box, AppBar, Toolbar, IconButton, Typography,
  Collapse, Input, InputBase, Badge, Menu, MenuItem
} from '@mui/material'
import {
  Menu as MenuIcon, Search as SearchIcon, Mail as MailIcon,
  Notifications as NotificationsIcon, AccountCircle, More as MoreIcon, Navigation
} from '@mui/icons-material'
import { useNavigate } from "react-router-dom"

export default () => {

  const tab_contents = [['Home', '/'], ['Create', '/create_contents']]

  const [anchorEl, setAnchorEl] = React.useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)
  const [tab_value, set_tab_value] = React.useState(0)

  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)


  const navigation = useNavigate()

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const handleTabChange = (event, newValue) => {
    set_tab_value(newValue)
    navigation(tab_contents[newValue][1])
  }

  const handleMoveToTop = () => {
    navigation('/')
  }

  const handleMoveToCreateContents = () => {
    navigation('/create_contents')
  }

  const handleSignOut = () => {
    window.location = '/accounts/signout/'
  }

  const menuId = 'primari-search-account-menu'
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem
        disableRipple
        divider
        sx={{ paddingLeft: '0', display: { xs: 'none', sm: 'flex' } }}
      >
        <IconButton
          aria-label="account icon"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="p"
        >
          { window.nickname }
        </Typography>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
    </Menu>
  )

  const mobileMenuId = 'primary-search-account-menu-mobile'
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem divider onClick={handleProfileMenuOpen} sx={{ paddingLeft: '5px' }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="p"
        >
          { window.nickname }
        </Typography>
      </MenuItem>
      <MenuItem disableRipple sx={{ paddingLeft: '20px', paddingRight: '30px' }}>
        <SearchIcon />
        <Input
          placeholder="検索"
          inputProps={{ 'aria-label': 'search contents' }}
          sx={{ paddingLeft: '5px' }}
        />
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show new mails"
          color="inherit"
        >
          <Badge badgeContent={window.messages_num} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show new notifications"
          color="inherit"
        >
          <Badge badgeContent={window.notifications_num} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
    </Menu>
  )

  const SearchBox = () => {
    const [checked, setChecked] = React.useState(false)
  
    const handleChange = () => {
      setChecked(prev => !prev)
    }
  
    return (
      <Box
        sx={{
          display: 'flex',
          borderRadius: '24px',
          backgroundColor: `rgba(0, 0, 0, ${checked ? 0.1 : 0})`
        }}
      >
        {checked
          ? <SearchIcon sx={{ margin: '12px' }} />
          : <IconButton
              size="large"
              color="inherit"
              aria-label="open search box"
              onClick={handleChange}
            >
              <SearchIcon />
            </IconButton>
        }
        <Collapse orientation="horizontal" in={checked}>
          <InputBase
            placeholder="検索"
            sx={{ marginRight: '24px', marginTop: '8px', color: 'white'}}
            inputProps={{ 'aria-label': 'search contents'}}
          />
        </Collapse>
      </Box>
    )
  }  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
          >
            Anki
          </Typography>
          <Tabs
            indicatorColor="secondary"
            textColor="inherit"
            value={
              tab_contents.length - 1
                - tab_contents.slice().reverse().findIndex(
                  ([_, url]) => location.pathname.startsWith(url)
                )
            }
            onChange={handleTabChange}
            aria-label="page tab"
          >
            { tab_contents.map(([content, _]) =>
              <Tab
                color="inherit"
                label={content}
                id={`tab-${content}`}
                key={`tab-${content}`}
                aria-controls={`tab-${content}`}
              />
            )}
          </Tabs>
          <Box sx={{ flexGrow: 20 }} />
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: 'space-between',
              display: { xs: 'none', sm: 'flex' }
            }}
          >
            <SearchBox />
            <IconButton
              size="large"
              aria-label="show new messages"
              color="inherit"
            >
              <Badge badgeContent={window.messages_num} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size='large'
              aria-label="show new notifications"
              color="inherit"
            >
              <Badge badgeContent={window.notifications_num} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
            <IconButton
              size='large'
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  )
}