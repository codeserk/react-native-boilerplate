import React from 'react'
import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { CommonStyles } from '~/assets/theme/common'

import { ButtonType } from '../../interfaces/button.interface'
import { styles } from './style'

export interface ButtonProps extends TouchableOpacityProps {
  /** button label */
  label?: string

  children?: Element

  /** Whether the button is loading */
  isLoading?: boolean

  /** Whether the colors of the button are inverse */
  type?: ButtonType

  /** Button/link size */
  size?: 'small' | 'big'

  /** Whether the button should fit in the space */
  fit?: boolean

  /** Whether the button should have a margin button */
  withMargin?: boolean

  /** Event triggered when the button is clicked */
  onPress: () => void
}

/**
 * Button component
 */
export function Button(props: ButtonProps) {
  const { label, onPress, isLoading } = props
  const usedStyles = styles[props.type ?? ButtonType.Normal]
  const color = (usedStyles.text as any).color
  const isSmall = props.size === 'small'
  const isBig = props.size === 'big'

  return (
    <TouchableOpacity
      {...props}
      style={[
        props.style,
        usedStyles.container,
        isSmall && usedStyles.containerSmall,
        isBig && usedStyles.containerBig,
        props.fit && usedStyles.containerFit,
        props.withMargin && CommonStyles.separationBottom,
      ]}
      onPress={onPress}>
      {label && <Text style={[usedStyles.text, isSmall && usedStyles.textSmall]}>{label}</Text>}
      {props.children}

      {isLoading && (
        <ActivityIndicator
          animating={true}
          color={color}
          style={[usedStyles.loader, isSmall && usedStyles.loaderSmall]}
        />
      )}
    </TouchableOpacity>
  )
}
