import React, { ChangeEvent } from 'react';
import { TextInput, Text } from 'react-native';

interface Props {
    value: string;
    onChangeText: (e: string | ChangeEvent<any>) => void;
    onBlur: (e: any) => void;
    style?: any;
    placeholder?: string;
    errors: string | undefined ;
}

function AppTextInput({value, errors,  onChangeText, onBlur, style, placeholder}: Props) {
    return (
       <>
        <TextInput
              onChangeText={onChangeText}
              onBlur={onBlur}
              value={value}
              style={[style,]}
              placeholder={placeholder}
            />
            {errors && <Text>{errors}</Text>}
       </>
    );
}

export default AppTextInput;