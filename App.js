import React from 'react';
import { View, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native';

class App extends React.Component {
  state = {
    animation: new Animated.Value(0)
  }
  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 300,
      duration: 1500
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 500
      }).start();
    })
  }
  render() {
    const randomValue = new Animated.Value(50)
    const newAnimation = Animated.add(
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