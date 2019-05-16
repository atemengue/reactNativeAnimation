import React from 'react';
import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native';

class App extends React.Component {
  state = {
    animation: new Animated.Value(1)
  }

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 2,
      duration: 500
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 500
      })
    })
  }
  render() {
    const animationStyle = {
      transform: [
        {
          scaleY: this.state.animation
        }
      ]
    }
    return(
      <View style={styles.container}>
      <TouchableWithoutFeedback onPress={this.startAnimation}>
        <Animated.View style={[styles.box, animationStyle]}/>
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
    height: 150,
    width: 150,
    backgroundColor: 'tomato'
  }
})


export default App;