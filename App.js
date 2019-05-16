import React from 'react';
import { View, Text, StyleSheet, Animated,TouchableWithoutFeedback } from 'react-native';

class App extends React.Component {
  state = {
    animation: new Animated.Value(150)
  }

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 300,
      duration: 500
    }).start()
  }
  render() {
    const animationStyles = {
      height: this.state.animation,
      width: this.state.animation
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
    width: 150,
    backgroundColor: 'tomato'
  }
})


export default App;