import React, {Component} from 'react';
import {
  FlatList,
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
const screenWidth = Dimensions.get('window').width;
import flatListdata from './flatListData8';

class FlatlistItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.Container1}>
        <View style={styles.Container2}>
          <Image style={styles.Container3} source={this.props.item.image} />
          <View style={styles.Container4}>
            <Text style={styles.Container5}>{this.props.item.name}</Text>
          </View>
          <View style={styles.Container6}>
            <Text style={styles.Container7}>{this.props.item.reward}</Text>
          </View>
        </View>
      </View>
    );
  }
}
export default function Reward() {
  return (
    <View>
      <FlatList
        style={styles.Container8}
        numColumns={2}
        horizontal={false}
        data={flatListdata}
        renderItem={({item, index}) => {
          return <FlatlistItem item={item} index={index} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Container1: {flexDirection: 'column'},
  Container2: {flexDirection: 'row'},
  Container3: {
    height: screenWidth / 2.2,
    width: screenWidth / 2.2,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 6,
  },
  Container4: {
    flex: 1,
    flexDirection: 'column',
    height: screenWidth / 6.5,
    width: screenWidth / 2.2,
    position: 'absolute',
    marginLeft: 6,
    marginRight: 6,
    alignSelf: 'flex-start',
    justifyContent: 'center',
  },
  Container5: {
    color: 'orange',
    alignSelf: 'center',
    fontSize: 18,
    textAlign: 'center',
  },
  Container6: {
    flex: 1,
    flexDirection: 'column',
    height: screenWidth / 6.5,
    width: screenWidth / 2.5,
    position: 'absolute',
    marginLeft: 8,
    marginRight: 8,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  Container7: {
    color: 'black',
    alignSelf: 'center',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '200',
  },
  Container8: {alignSelf: 'center'},
});
