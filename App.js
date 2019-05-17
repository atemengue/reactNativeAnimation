import React from 'react';
import { View, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native';

class App extends React.Component {
  state = {
    animation: new Animated.Value(0)
  }
  startAnimation = () => {
    Animated.parallel([
      Animated.timing(this.state.animation, {
        toValue: 12,
        duration: 3500
      })
    ]).start()
  }
  render() {
    const randomValue = new Animated.Value(3);
    const newAnimation = Animated.modulo(
      this.state.animation, randomValue
    )

    const interpolated = newAnimation.interpolate({
      inputRange: [0, 3],
      outputRange: ['0deg', '270deg']
    })
    const animationOne = {
      transform: [{ rotate: interpolated }]
    }

    return(
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animationOne]} />
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