import { Drawer, Button } from 'antd';
import React, { Component } from 'react'
import ChatCom from './chatCom'


export default class LIveChat extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
      const height = document.documentElement.clientHeight;
    return (
      <div>
        <Button 
        style={{position:"fixed",bottom:"20px",right:"20px"}}
        type="primary" onClick={this.showDrawer}>
          live chat
        </Button>
        <Drawer
          title="livechat-gumei"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          width={500}
          height={height}
          bodyStyle={{
              margin:0,
              padding:0
          }}
        >
          <ChatCom/>
        </Drawer>
      </div>
    );
  }
}
