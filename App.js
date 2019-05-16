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
    }).start()
  }
  
  render() {
    const heightInterpolation = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['20%', '30%']
    });
    
    const widthInterpolation = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['20%', '50%']
    });

    const animationStyles = {
      height: heightInterpolation,
      width: widthInterpolation
    }
    return(
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animationStyles]} /> 
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
    width: '20%',
    height: '20%',
    backgroundColor: 'tomato'
  }
})


export default App;