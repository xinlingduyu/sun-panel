import { ss } from '@/utils/storage'
import { PanelPanelConfigStyleEnum, PanelStateNetworkModeEnum } from '@/enum'
import defaultBackground from '@/assets/defaultBackground.webp'
const LOCAL_NAME = 'panelStorage'

export function defaultStatePanelConfig(): Panel.panelConfig {
  return {
    backgroundImageSrc: defaultBackground,
    backgroundBlur: 0,
    iconStyle: PanelPanelConfigStyleEnum.icon,
    iconTextColor: '#ffffff',
    logoText: 'Sun-Panel',
    logoImageSrc: '',
    clockShowSecond: false,
  }
}

export function defaultState(): Panel.State {
  return {
    rightSiderCollapsed: false,
    leftSiderCollapsed: false,
    networkMode: PanelStateNetworkModeEnum.wan,
    panelConfig: { ...defaultStatePanelConfig() },
  }
}

export function getLocalState(): Panel.State {
  const localState = ss.get(LOCAL_NAME)
  return { ...defaultState(), ...localState }
}

export function setLocalState(state: Panel.State) {
  ss.set(LOCAL_NAME, state)
}

export function removeLocalState() {
  ss.remove(LOCAL_NAME)
}
