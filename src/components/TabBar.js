import React from 'react';
import { TabBar } from 'antd-mobile-rn';

export default class WallTabBar extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedTab: 'wallTab',
    };
  }

  onChangeTab(tabName: any) {
    this.setState({
      selectedTab: tabName,
    });
  }

  render() {
    return (
      <TabBar
        unselectedTintColor="#929292"
        tintColor="#984B4B"
        barTintColor="#FFFFFF"
      >
        <TabBar.Item
          title="墙"
          icon={require('../images/wall-unselect.png')}
          selectedIcon={require('../images/wall-select.png')}
          selected={this.state.selectedTab === 'wallTab'}
          onPress={() => this.onChangeTab('wallTab')}
        >
        </TabBar.Item>
        <TabBar.Item
          icon={require('../images/message-unselect.png')}
          selectedIcon={require('../images/message-select.png')}
          title="消息"
          badge={2}
          selected={this.state.selectedTab === 'messageTab'}
          onPress={() => this.onChangeTab('messageTab')}
        >
        </TabBar.Item>
        <TabBar.Item
          icon={require('../images/found-unselect.png')}
          selectedIcon={require('../images/found-select.png')}
          title="发现"
          selected={this.state.selectedTab === 'foundTab'}
          onPress={() => this.onChangeTab('foundTab')}
        >
        </TabBar.Item>
        <TabBar.Item
          icon={require('../images/me-unselect.png')}
          selectedIcon={require('../images/me-select.png')}
          title="我"
          selected={this.state.selectedTab === 'meTab'}
          onPress={() => this.onChangeTab('meTab')}
        >
        </TabBar.Item>
      </TabBar>
    );
  }
}