import React from 'react';
import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback, Easing } from 'react-native';

class App extends React.Component {
  state = {
    animation: new Animated.Value(0)
  }

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 300,
      duration: 500,
      easing: Easing.bounce,
      // easing: Easing.back(5),
      // easing: Easing.elastic(3),
      // easing: Easing.bezier(.06, 1, .86, .23)
    }).start()
  }
  render() {
    const animationStyle = {
      transform: [{ translateY: this.state.animation }]
    }
    return(
      <View style={styles.container}>
      <TouchableWithoutFeedback onPress={this.startAnimation}>
        <Animated.View style={[styles.box, animationStyle]} />
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
    height: 100,
    width: 100,
    position: 'relative',
    left: 0,
    backgroundColor: 'tomato'
  }
});


export default App;