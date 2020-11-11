import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Header, Item, Form, Textarea, Label, Input } from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';


const { width } = Dimensions.get('window')

class ProfileScreen extends React.Component {
    state = {
        // value: 1,
        value: 0,
    }
    render() {
        const { navigation } = this.props;
        const radio_props = [
            { label: 'Talent', value: 0 },
            { label: 'Agent', value: 1 }
        ];
        return (
            <View style={styles.container}>
                <Header androidStatusBarColor="#fff" style={{ backgroundColor: '#fff' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('SignIn')}
                        style={styles.iconStyle}>
                        <Icon name="arrowleft" size={23} />
                    </TouchableOpacity>
                    <View style={styles.main}>
                        <Text style={styles.txtStyle}>Edit Profile</Text>
                    </View>
                </Header>

                <TouchableOpacity style={{ justifyContent: 'center', alignSelf: 'center' }}>
                    <Image source={require('../../assets/avatartwo.jpeg')} width="50" height="50"
                        style={styles.imgStyle} />
                    <LinearGradient
                        style={styles.linrGradin}
                        start={{ x: 0.2, y: 0.35 }} end={{ x: 0.30, y: 1.0 }}
                        colors={['#F83545', '#F31A83']}>
                        <Icon name="upload" size={14} color="#fff" />
                    </LinearGradient>
                </TouchableOpacity>

                <View style={{marginTop: -18}}>
                    <Text style={styles.myTxt}>I am</Text>

                    <RadioForm
                        formHorizontal={true}
                        animation={true}
                    >
                        {
                            radio_props.map((obj, i) => (
                                <RadioButton labelHorizontal={true} key={i} >
                                    <RadioButtonInput
                                        obj={obj}
                                        index={i}
                                        isSelected={this.state.value === i}
                                        borderWidth={1}
                                        buttonInnerColor={'#e74c3c'}
                                        buttonOuterColor={this.state.value === i ? '#2196f3' : '#000'}
                                        buttonOuterSize={20}
                                        buttonWrapStyle={{ marginLeft: 15 }}
                                    />
                                    <RadioButtonLabel
                                        obj={obj}
                                        index={i}
                                        labelHorizontal={true}
                                        onPress={(val) => this.setState({ value: val })}
                                    // labelWrapStyle={{}}
                                    />
                                </RadioButton>
                            ))
                        }
                    </RadioForm>

                    <Item style={{ marginTop: 15, }} />

                    <View style={{ marginTop: 10 }}>
                        <Label style={styles.aboutTxt}>About Me</Label>
                        <Form style={{ padding: 16, marginTop: -17 }}>
                            <Textarea rowSpan={4.4} bordered placeholder="Type here" />
                        </Form>
                    </View>

                    <Item />

                    <View>
                        <Text style={styles.socialTxt}>Social Links</Text>
                    </View>

                    <View style={styles.allInputs}>
                        <View>
                            <Label style={{ marginLeft: 2, marginVertical: 4 }}>Facebook</Label>
                            <Item regular style={{ width: width / 2.5 }}>
                                <Input placeholder='Type here' />
                            </Item>
                        </View>
                        <View>
                            <Label style={{ marginLeft: 2, marginVertical: 4 }}>Instagram</Label>
                            <Item regular style={{ width: width / 2.5 }}>
                                <Input placeholder='Type here' />
                            </Item>
                        </View>
                    </View>

                    <View style={styles.myInput}>
                        <View>
                            <Label style={{ marginLeft: 2, marginVertical: 4 }}>Twitter</Label>
                            <Item regular style={{ width: width / 2.5 }}>
                                <Input placeholder='Type here' />
                            </Item>
                        </View>
                        <View>
                            <Label style={{ marginLeft: 2, marginVertical: 4 }}>Youtube</Label>
                            <Item regular style={{ width: width / 2.5 }}>
                                <Input placeholder='Type here' />
                            </Item>
                        </View>
                    </View>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
                        <LinearGradient
                            style={styles.btn}
                            start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 3.0 }}
                            colors={['#F83545', '#F31A83']}>
                            <Text style={styles.txt}>Save</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    txtStyle: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    linrGradin: {
        width: 34,
        height: 34,
        borderRadius: 18,
        textAlign: 'center',
        alignSelf: 'center',
        padding: 10,
        position: 'absolute',
        bottom: 10,
        right: 10
    },
    imgStyle: {
        width: 85,
        height: 85,
        borderRadius: 48,
        margin: 10,
    },
    iconStyle: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 15
    },
    main: {
        flex: 1,
        justifyContent: 'center',
        marginRight: 60
    },
    myTxt: {
        fontSize: 15,
        fontWeight: 'bold',
        margin: 10,
        padding: 10
    },
    aboutTxt: {
        fontSize: 15,
        marginLeft: 17,
    },
    socialTxt: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 8,
        marginLeft: 18,
    },
    allInputs: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        // marginTop: 7, 
        marginRight: 9
    },
    myInput: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 7,
        marginRight: 9
    },
    btn: {
        margin: 36,
        alignItems: 'center',
        height: 45,
        borderRadius: 25
    },
    txt: {
        fontSize: 20,
        color: '#fff',
        paddingTop: 10,
      },
})