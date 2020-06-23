//screen 5 bang flatlist
import React from 'react';
import {
  FlatList,
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native';
import flatListData from './flatListData5';

const screenWidth = Dimensions.get('window').width;
class FlatlistItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {navigation} = this.props;

    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(this.props.item.screen)}>
        <View style={styles.Container1}>
          <View style={styles.Container2}>
            <Image style={styles.Container3} source={this.props.item.image} />
            <View style={styles.Container4}>
              <Text style={styles.Container5}>{this.props.item.name}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
export default function Services({navigation}) {
  // const navigation = useNavigation();
  return (
    <View>
      <FlatList
        style={styles.Container0}
        numColumns={2}
        data={flatListData}
        renderItem={({item, index}) => {
          return (
            <FlatlistItem navigation={navigation} item={item} index={index} />
          );
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  Container0: {alignSelf: 'center'},
  Container1: {flexDirection: 'column', alignItems: 'center'},
  Container2: {flexDirection: 'row', alignSelf: 'center'},
  Container3: {
    height: screenWidth / 2.2,
    width: screenWidth / 2.2,
    marginLeft: 6,
    marginRight: 6,
    marginTop: 16,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  Container4: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
    height: screenWidth / 7,
    width: screenWidth / 2.2,
    position: 'absolute',
    marginLeft: 6,
    marginRight: 6,
    opacity: 0.8,
    alignSelf: 'flex-end',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    justifyContent: 'center',
  },
  Container5: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '400',
  },
});
