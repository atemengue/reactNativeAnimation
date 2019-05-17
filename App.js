import React from 'react';
import { View, Text, StyleSheet, ScrollView, Animated } from 'react-native';

class App extends React.Component {
  state = {
    animation: new Animated.Value(0)
  }
  render() {
    const backInterpolate = this.state.animation.interpolate({
      inputRange: [0, 3000],
      outputRange: ['rgb(145, 15, 200)', 'rgb(200, 15, 145)']
    });

    const backgroundStyle = {
      backgroundColor: backInterpolate
    }
    return(
      <View style={styles.container}>
        <ScrollView onScroll={Animated.event([{
          nativeEvent: {
            contentOffset: {
              y : this.state.animation
            }
          }
          }
        ])} scrollEventThrottle={16}>
          <Animated.View style={[styles.content, backgroundStyle]} />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    height: 3000
  }
})



export default App;