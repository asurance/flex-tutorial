/// <reference types="next" />
/// <reference types="next/types/global" />

type AlignContent = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch'
type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
type AlignSelf = 'auto' | AlignItems
type FlexBasis = 'content' | number
type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse'
type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse'
type JustifyContent = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'
type Order = number