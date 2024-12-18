import React, { useRef } from 'react';
import { Animated, PanResponder } from 'react-native';
import styles from './styles';

const AnimatedView = ({ children, onSwipeDown, threshold = 300 }) => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (e, gestureState) => {
      if (gestureState.dy > 0) {
        Animated.event([null, { dy: pan.y }], { useNativeDriver: false })(e, gestureState);
      }
    },
    onPanResponderRelease: (e, gestureState) => {
      if (gestureState.dy > threshold) {
        // Appeler la fonction onSwipeDown passée en prop si on dépasse le seuil
        if (onSwipeDown) {
          onSwipeDown();
        }
        pan.setValue({ x: 0, y: 0 }); // Réinitialiser la position
      } else {
        // Réinitialiser la vue si on ne dépasse pas le seuil
        Animated.spring(pan.y, {
          toValue: 0,
          useNativeDriver: false,
          tension: 80,
          friction: 10,
        }).start();
      }
    }
  });

  return (
    <Animated.View style={[styles.commentContainer, {transform: [{ translateY: pan.y }]}]}>
      {children}
    </Animated.View>
  );
};

export default AnimatedView;