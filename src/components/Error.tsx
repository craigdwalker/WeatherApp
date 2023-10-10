import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import {Color} from '../theme/Colors';
import {textStyle} from '../theme/styles/TextStyles';
import {containerStyle} from '../theme/styles/ContainerStyles';

const Error = ({errorMessage, retryTitle, retryOnPress}) => {
  return (
    <View style={containerStyle.columnContainer}>
      <Text style={textStyle.titleMedium}>Error!</Text>
      <Text style={textStyle.bodyMedium}>{errorMessage}</Text>
      {retryTitle && retryOnPress ? (
        <Button
          color={Color.primary}
          title={retryTitle}
          onPress={retryOnPress}
        />
      ) : null}
    </View>
  );
};

export default Error;
