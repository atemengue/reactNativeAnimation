import React from 'react';
import { View, StyleSheet, Animated, TouchableWithoutFeedback, Text } from 'react-native';

class App extends React.Component {
  state = {
    colorAnimation: new Animated.Value(0),
    scaleAnimation: new Animated.Value(1)
  }

  handlePress = () => {
    Animated.parallel([
      Animated.timing(this.state.colorAnimation, {
        toValue: 1,
        duration: 500
      }),
      Animated.timing(this.state.scaleAnimation,{
        toValue: 2, 
        duration: 500
      }).start()
    ]).start(() => {
      alert("Animation Complete")
    })

  }
  render() {
    const backgroundColorInterpolate = this.state.colorAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: ["rgb(255, 99, 77)", "rgb(99, 71, 255)"]
    })
    boxStyle = {
      backgroundColor: backgroundColorInterpolate,
      transform: [{ scale: this.state.scaleAnimation }]
    }
   return(
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={this.handlePress}>
        <Animated.View style={[styles.box, boxStyle]}>
          <Text>Hello Parallel</Text>
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
      height: 80,
      width: 80,
      backgroundColor: 'tomato'
    }
})


export default App;