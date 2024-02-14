import { DEFAULT_POSITION_TOASTIFY, DEFAULT_TIME_AUTO_CLOSE_TOASTIFY } from '@/common/default-options-toastify'


export class DefaultToastifyOption {
  private position = DEFAULT_POSITION_TOASTIFY
  private autoClose = DEFAULT_TIME_AUTO_CLOSE_TOASTIFY
  private hideProgressBar = false
  private closeOnClick = true
  private pauseOnHover = true
  private draggable = true
  private progress = undefined
  private theme = 'light'

  public setPosition(position: string) {
    this.position = position
  }
}