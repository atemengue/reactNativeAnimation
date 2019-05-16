import React from 'react';
import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native';

class App extends React.Component {
  state = {
    animation: new Animated.Value(0)
  }
  startAnimation = () => {
    Animated.timing(this.state.animation,{
      toValue: -300,
      duration: 1500
    }).start(() => this.state.animation.setValue(0))
  }
  render() {
    const animatedStyles = {
      transform: [
        {
          translateY: this.state.animation
        }
      ]
    }
    return(
      <View style={styles.container }>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyles]}/>
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