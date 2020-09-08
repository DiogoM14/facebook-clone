import React from 'react'
import { Search, Home, Flag, SubscriptionsOutlined, StorefrontOutlined, SupervisedUserCircle, Add, Forum, NotificationsActive, ExpandMore } from '@material-ui/icons'
import { Avatar, IconButton } from '@material-ui/core';

import { Container, HeaderLeft, HeaderCenter, HeaderRight } from './styles';

import Logo from '../../assets/logo.png';

export default function index() {
  return (
    <Container>
      <HeaderLeft>
        <img src={Logo} alt="Facebook logo" />
        <div className="header__input">
          <Search />
          <input placeholder='Search Facebook' type="text"/>
        </div>
      </HeaderLeft>

      <HeaderCenter>
        <div className="header__option header__option--active" >
          <Home fontSize="large" />
        </div>
        <div className="header__option">
          <Flag fontSize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsOutlined fontSize="large" />
        </div>
        <div className="header__option">
          <StorefrontOutlined fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircle fontSize="large" />
        </div>
      </HeaderCenter>
      
      <HeaderRight>
        <div className="header__info">
          <Avatar />
          <h4>Diogo Martins</h4>
        </div>

        <IconButton>
          <Add />
        </IconButton>
        <IconButton>
          <Forum />
        </IconButton>
        <IconButton>
          <NotificationsActive />
        </IconButton>
        <IconButton>
          <ExpandMore />
        </IconButton>
      </HeaderRight>
    </Container>
  )
}
