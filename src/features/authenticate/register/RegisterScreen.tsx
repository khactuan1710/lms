import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';

import {ThemeContext} from '../../../resources/theme';

const RegisterScreen: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {theme} = useContext(ThemeContext);

  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default RegisterScreen;
