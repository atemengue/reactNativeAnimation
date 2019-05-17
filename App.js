import React from 'react';
import { View, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native';

class App extends React.Component {
  state = {
    animation: new Animated.Value(0)
  }
  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 50,
      duration: 1500
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 200
      }).start();
    })
  }
  render() {
    const randomValue = new Animated.Value(6)
    const newAnimation = Animated.multiply(
      this.state.animation, randomValue
    )
    const animationOne = {
      transform: [{ translateY: newAnimation }]
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