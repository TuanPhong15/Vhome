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
import flatListdata2 from '../SecondRun/flatListData8EPE';
class FlatlistItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={style.header}>
        <View style={style.container1}>
          <Image style={style.image} source={{uri: this.props.item.image}} />
          <View style={style.container2}>
            <Text style={style.text}>{this.props.item.name}</Text>
          </View>
          <View style={style.container3}>
            <Text style={style.text2}>{this.props.item.reward}</Text>
          </View>
          <View style={style.container4}>
            <Text style={style.text3}>Đổi thưởng</Text>
          </View>
        </View>
      </View>
    );
  }
}
export default function Reward2() {
  return (
    <View>
      <FlatList
        style={style.flat}
        numColumns={2}
        horizontal={false}
        data={flatListdata2}
        renderItem={({item, index}) => {
          return <FlatlistItem item={item} index={index} />;
        }}
      />
    </View>
  );
}
const style = StyleSheet.create({
  header: {flexDirection: 'column'},
  container1: {flexDirection: 'row'},
  image: {
    height: screenWidth / 2.2,
    width: screenWidth / 2.2,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 6,
  },
  container2: {
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
  text: {
    color: 'orange',
    alignSelf: 'center',
    fontSize: 18,
    textAlign: 'center',
  },
  container3: {
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
  text2: {
    color: 'black',
    alignSelf: 'center',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '200',
  },
  container4: {
    flex: 1,
    flexDirection: 'column',
    height: screenWidth / 9,
    width: screenWidth / 2.25,
    position: 'absolute',
    marginLeft: 5.5,
    marginRight: 3,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    backgroundColor: 'orange',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  text3: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 18,
    textAlign: 'center',
  },
  flat: {alignSelf: 'center'},
});
