import React from 'react';
import { View, Text, StyleSheet, PanResponder, Animated } from 'react-native';

class App extends React.Component {
  state = {
    animation: new Animated.ValueXY(0)
  }

  componentWillMount() {

    // this.state.animation.addListener((value) => {
    //   this._x = value.x,
    //   this._y = value.y
    // })

    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      // onPanResponderGrant: () => {
      //   this.state.animation.setOffset({
      //     x: this._x,
      //     y: this._y
      //   });
      //   this.state.animation.setValue({
      //     x: 0,
      //     y: 0
      //   })
      // },

      onPanResponderGrant: () => {
        this.state.animation.extractOffset()
      },
      onPanResponderMove: Animated.event([
        null, {
          dx: this.state.animation.x,
          dy: this.state.animation.y
        }
      ]),
      onPanResponderRelease: (evt, { vx, vy}) => {
        Animated.decay(this.state.animation,{
          velocity: {x: vx, y: vy },
          deceleration: 0.997
        }).start()
      }
    })
  }
  render() {
    const dStyle = {
      transform: this.state.animation.getTranslateTransform()
    }
    return(
      <View style={styles.container}>
        <Animated.View style={[styles.box, dStyle]} { ...this._panResponder.panHandlers} />
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