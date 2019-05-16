import React from 'react';
import { View, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native';

class App extends React.Component {
  state = {
    animation: new Animated.Value(1)
  }
  
  startAnimation = () => {
    this.state.animation.addListener((value)=> {
      console.log(value);
    })
    Animated.spring(this.state.animation, {
      toValue: 2,
      friction: 20,
      tension: 180
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 300
      }).start()
    })
  }
  render() {
    const animationStyle = {
      transform: [{ scale: this.state.animation }]
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
    height: 80,
    width: 80,
    backgroundColor: 'tomato'
  }
})


export default App;