import React, { useMemo, useState } from 'react'
import { Text, TextInput, TextInputProps, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import { TextboxColor } from '~/assets/theme/color/components/Textbox'

import { styles } from './style'

export enum TextboxIcon {
  Check = 'check',
  CheckOutline = 'check-outline',
}

export interface TextboxProps extends TextInputProps {
  /** Input placeholder */
  placeholder?: string

  /** Src of the icon to show */
  icon?: string

  value: string

  /** Whether the value is a password */
  isPassword?: boolean

  error?: string

  onInput: (value: string) => void
}

/**
 * Text input
 */
export function Textbox(props: TextboxProps) {
  const [isDirty, setDirty] = useState(false)
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [focused, setFocused] = useState(false)

  const containerStyles = useMemo(
    () => [
      styles.container,
      focused && styles.containerFocused,
      props.multiline && styles.containerMultiline,
    ],
    [focused, props.multiline],
  )

  const inputStyles = useMemo(
    () => [
      styles.input,
      isDirty && props.error && styles.inputError,
      props.multiline && styles.inputMultiline,
    ],
    [isDirty, props.error, props.multiline],
  )
  const placeholderColor = useMemo(() => {
    if (isDirty && props.error) {
      return TextboxColor.placeholder.error
    }
    return focused ? TextboxColor.placeholder.focused : TextboxColor.placeholder.default
  }, [focused, isDirty, props.error])

  function onInput(text: any) {
    setDirty(true)
    props.onInput(text)
  }

  return (
    <View style={styles.wrapper}>
      <View style={containerStyles}>
        <TextInput
          {...props}
          placeholder={props.placeholder}
          placeholderTextColor={placeholderColor}
          style={inputStyles}
          value={props.value}
          secureTextEntry={props.isPassword && !passwordVisible}
          onChangeText={onInput}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />

        {props.icon && (
          <View style={[styles.iconContainer, styles.iconContainerWithBorder]}>
            <Icon name={props.icon} style={styles.icon} />
          </View>
        )}

        {props.isPassword && (
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
            style={styles.iconContainer}>
            <Icon
              name={passwordVisible ? 'eye-slash' : 'eye'}
              style={[
                styles.icon,
                passwordVisible ? styles.iconBlack : styles.iconGrey,
                styles.iconBig,
              ]}
            />
          </TouchableOpacity>
        )}

        {props.maxLength && <Text style={styles.maxLength}>{props.maxLength}</Text>}
      </View>

      {isDirty && props.error && <Text style={styles.error}>{props.error}</Text>}
    </View>
  )
}
