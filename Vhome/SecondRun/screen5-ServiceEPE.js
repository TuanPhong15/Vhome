//test Home cu~
import React, {Component, useState} from 'react';
import {
  FlatList,
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {Data} from '../database/Data';
import flatListData2 from '../SecondRun/flatListData5EPE';
const screenWidth = Dimensions.get('window').width;
class FlatlistItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={style.header}>
        <View style={style.container1}>
          <Text style={style.text1}>{this.props.item.title}</Text>
        </View>
        <View style={style.container2}>
          <View style={style.container3}>
            <View style={style.container4}>
              <Image style={style.image1} source={Data.screen5E.user} />
            </View>
            <View style={style.container5}>
              <Text style={style.text2}>{this.props.item.user}</Text>
            </View>
            <View style={style.container6}>
              <Image style={style.image2} source={Data.screen5E.phone} />
            </View>

            <Text style={style.text3}>{this.props.item.phone}</Text>
          </View>
          <View style={style.container7}>
            <View style={style.container8}>
              <Image style={style.image3} source={Data.screen5E.calendar} />
            </View>
            <View />
            <View style={style.container9}>
              <Text style={style.text4}>
                {this.props.item.time}
                <Text style={style.text7}> {this.props.item.date}</Text>
              </Text>
            </View>
            <View style={style.container10}>
              <Image style={style.image4} source={Data.screen5E.price} />
            </View>
            <Text style={style.text5}>{this.props.item.price}</Text>
          </View>
          <View style={style.container11}>
            <View style={style.container12}>
              <Image style={style.image5} source={Data.screen5E.location2} />
            </View>
            <Text style={style.text6}>{this.props.item.address}</Text>
          </View>
        </View>
      </View>
    );
  }
}
export default function Services2() {
  const [online, setOnline] = useState(true);

  return (
    <View style={style.container13}>
      <View style={style.container14}>
        <View style={style.container15}>
          <TouchableOpacity
            style={style.touchable}
            onPress={() => setOnline(!online)}>
            <Image
              style={style.image6}
              source={online ? Data.screen5E.on : Data.screen5E.off}
            />
          </TouchableOpacity>
          {online ? (
            <Text style={style.text8}>Online</Text>
          ) : (
            <Text style={style.text8}>Offline</Text>
          )}
        </View>
      </View>
      <View style={style.container16} />
      <FlatList
        style={style.container17}
        data={flatListData2}
        renderItem={({item, index}) => {
          return <FlatlistItem item={item} index={index} />;
        }}
      />
    </View>
  );
}
const style = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  container1: {
    backgroundColor: '#F59031',
    width: (screenWidth * 11) / 12,
    height: 45,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text1: {color: 'white', fontSize: 20, marginLeft: 10},
  container2: {flexDirection: 'column'},
  container3: {flexDirection: 'row'},
  container4: {height: 20, marginTop: 10},
  image1: {resizeMode: 'contain', height: '150%'},
  container5: {width: 130},
  text2: {fontSize: 18, marginTop: 15, left: 7},
  container6: {height: 20, marginTop: 10, marginLeft: 10},
  image2: {resizeMode: 'contain', height: '150%'},
  text3: {fontSize: 18, marginTop: 10, left: 5},
  container7: {flexDirection: 'row'},
  container8: {height: 20, marginTop: 20},
  image3: {resizeMode: 'contain', height: '150%'},
  container9: {width: 140},
  text4: {
    fontSize: 18,
    marginTop: 25,
    marginRight: 10,
    marginLeft: 7,
  },
  container10: {height: 20, marginTop: 20, marginLeft: 6},
  image4: {resizeMode: 'contain', height: '150%'},
  text5: {fontSize: 18, marginTop: 25, left: 5},
  container11: {
    flexDirection: 'row',
  },
  container12: {height: 20, marginTop: 20},
  image5: {resizeMode: 'contain', height: '170%'},
  text6: {fontSize: 18, marginTop: 25, marginLeft: 7},
  text7: {fontSize: 18},
  container13: {flexDirection: 'column'},
  container14: {flexDirection: 'row', width: screenWidth},
  container15: {width: 100},
  image6: {
    resizeMode: 'contain',
    width: '65%',
  },
  touchable: {
    left: screenWidth - 80,
    top: 10,
  },
  text8: {fontSize: 20, left: 20, color: 'grey', bottom: 22},
  container16: {
    opacity: 0.5,
    width: (screenWidth * 15) / 16,
    height: 1,
    backgroundColor: 'black',
    alignSelf: 'center',
  },
  container17: {alignSelf: 'center'},
});
