import React from 'react';
import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native';

class App extends React.Component {
  state = {
    animation: new Animated.Value(0)
  }

  startAnimation = () => {
    Animated.timing(this.state.animation,{
      toValue: 360,
      duration: 1500
    }).start();
  }


  render() {
    const rotateInterpolate = this.state.animation.interpolate({
      inputRange: [0, 360],
      outputRange:['0deg', '360deg']
    })

    const rotateAnimationStyle = {
      transform: [
        {
          rotate: rotateInterpolate
        }
      ]
    }
    return(
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, rotateAnimationStyle]}>
            <Text>React Native Animation</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: 'tomato'
  }
})


export default App;