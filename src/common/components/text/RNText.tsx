import React, { useContext, ReactNode } from 'react';
import { Text, TextStyle } from 'react-native';

import { ThemeContext } from '../../../resources/theme';
import { TYPOGRAPHY, FontEnum } from '../../../common/constants';

interface RNTextProps {
    children: ReactNode;
    size: number;
    type?: FontEnum;
    color?: string;
    style?: TextStyle;
}

const defaultProps = {
    type: FontEnum.REGULER,
    color: undefined,
    style: undefined,
};

/**
 *  Common UI RNText
 *
 * @require font size
 */
const RNText: React.FC<RNTextProps> = props => {
    const { children, size, type, color, style } = props;
    const { theme } = useContext(ThemeContext);

    function getTextStyle(
        s: number,
        t: FontEnum = FontEnum.REGULER,
        c: string = theme.text,
    ) {
        const key = `text${s}${t}`;
        const func = TYPOGRAPHY[key];
        return func(c);
    }

    return (
        <Text style={[getTextStyle(size, type, color), style]}>{children}</Text>
    );
};

RNText.defaultProps = defaultProps;

export default RNText;
