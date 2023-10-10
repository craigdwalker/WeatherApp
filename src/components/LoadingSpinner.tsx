import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {Color} from '../theme/Colors';
import {textStyle} from '../theme/styles/TextStyles';
import {containerStyle} from '../theme/styles/ContainerStyles';

const LoadingSpinner = ({loadingMessage}) => {
  return (
    <View style={containerStyle.columnContainer}>
      <Text accessibilityRole="text" style={textStyle.bodyMedium}>
        {loadingMessage}
      </Text>
      <ActivityIndicator size="large" color={Color.primary} />
    </View>
  );
};

export default LoadingSpinner;
