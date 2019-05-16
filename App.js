import React from 'react';
import { View, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native';

class App extends React.Component {
  state = {
    animation: new Animated.Value(0)
  }

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 1500
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 1500
      }).start();
    });
  }

  render() {
    
    const boxInterpolation =  this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgb(255, 88, 200)', 'rgb(11, 88, 255)']
    });

    const boxAnimationStyle = {
      backgroundColor: boxInterpolation
    }

    const textInterpolation = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgb(11, 255, 255)', 'rgb(255, 88, 200)']
    })

    const textAnimationStye = {
      color: textInterpolation
    }
      
  return(
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, boxAnimationStyle]}>
            <Animated.Text style={[textAnimationStye]}>React Native Animation</Animated.Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    width: 150,
  }
})


export default App;