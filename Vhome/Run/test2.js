
                <View>
                <View style={{ flexDirection: 'column', borderRadius: 15, width: screenWidth / 1.1, height: screenHeight / 1.8, backgroundColor: 'white' }}
                >
                    //header
                    <View style={{ flexDirection: 'row' }}>

                       
                            <TouchableOpacity onPress={() => setScreenOne(!screenOne)}>
                                <View style={{ justifyContent: 'center', alignItems: 'center', 
                                borderTopLeftRadius: 15, 
                                width: (screenWidth / 1.1 - screenWidth / 8.8) / 3, 
                                height: 50, backgroundColor: 'orange' }}>
                                    <Text style={{ color: "white", fontSize: 19 }}>Bước 1</Text>
                                </View></TouchableOpacity>

                        <TouchableOpacity>
                            <View style={{
                                justifyContent: 'center', alignItems: 'center',
                                 width: (screenWidth / 1.1 - screenWidth / 8.8) / 3,
                                  height: 50, backgroundColor: 'white'
                            }}>
                                <Text style={{ color: "orange", fontSize: 19 }}>Bước 2</Text>

                            </View></TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ justifyContent: 'center', alignItems: 'center', 
                            width: (screenWidth / 1.1 - screenWidth / 8.8) / 3, height: 50, 
                            backgroundColor: 'orange' }}>
                                <Text style={{ color: "white", fontSize: 19 }}>Bước 3</Text>
                            </View></TouchableOpacity>
                        <View style={{ borderTopRightRadius: 15, width: screenWidth / 8.8, height: 50, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => hideModal(!modal)} >
                                <Image style={{ width: 32 * 80 / 100, height: 32 * 80 / 100 }}
                                    source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/close2.png')}></Image>
                            </TouchableOpacity>
                        </View>
                        <View></View>


                    </View>
                     
                        </View>
                        //mid

                       <Text>screen 2</Text>
                //footer
                <View style={{ alignItems: 'center', justifyContent: 'center', top: -40, backgroundColor: 'orange', height: 50, borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}>
                        <TouchableOpacity onPress={() => setScreenTwo(!screenTwo)}>
                        <Text style={{ fontSize: 20, color: 'white', fontWeight: '600' }}>Tiếp theo</Text>
                    </TouchableOpacity>
                </View>
                        </View>
                    