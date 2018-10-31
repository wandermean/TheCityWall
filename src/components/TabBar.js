import React from 'react';
import { View, Text } from 'react-native';
import { TabBar } from 'antd-mobile-rn';

export default class WallTabBar extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedTab: 'wallTab',
    };
  }

  renderContent(pageText: any) {
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
        <Text style={{ margin: 50 }}>{pageText}</Text>
      </View>
    );
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
        <TabBar.Item iconStyle={{ height: 5}}
          title="墙"
          icon={require('../images/wall-unselect.png')}
          selectedIcon={require('../images/wall-select.png')}
          selected={this.state.selectedTab === 'wallTab'}
          onPress={() => this.onChangeTab('wallTab')}
        >
          {this.renderContent('Life Tab')}
        </TabBar.Item>
        <TabBar.Item
          icon={require('../images/message-unselect.png')}
          selectedIcon={require('../images/message-select.png')}
          title="消息"
          badge={2}
          selected={this.state.selectedTab === 'messageTab'}
          onPress={() => this.onChangeTab('messageTab')}
        >
          {this.renderContent('Life Tab')}
        </TabBar.Item>
        <TabBar.Item
          icon={require('../images/found-unselect.png')}
          selectedIcon={require('../images/found-select.png')}
          title="发现"
          selected={this.state.selectedTab === 'foundTab'}
          onPress={() => this.onChangeTab('foundTab')}
        >
          {this.renderContent('Life Tab')}
        </TabBar.Item>
        <TabBar.Item
          icon={require('../images/me-unselect.png')}
          selectedIcon={require('../images/me-select.png')}
          title="我"
          selected={this.state.selectedTab === 'meTab'}
          onPress={() => this.onChangeTab('meTab')}
        >
          {this.renderContent('Life Tab')}
        </TabBar.Item>
      </TabBar>
    );
  }
}