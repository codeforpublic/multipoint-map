import { css } from '@emotion/core'
import moment from 'moment-timezone'

import { COLORS } from './const'

import { ReactComponent as BoltIcon } from './assets/bolt.svg'
import { ReactComponent as PinIcon } from './assets/pin.svg'
const DescItem = ({ icon, title, secondLine }) => {
  return (
    <div className="flex pb-4">
      <div className="w-8 pt-1">{icon}</div>
      <div>
        <div
          className="font-medium text-xl"
          css={css`
            color: ${COLORS.BLUE};
          `}
        >
          {title}
        </div>
        <div
          className="font-normal text-sm"
          css={css`
            color: ${COLORS.BLACK};
          `}
        >
          {secondLine}
        </div>
      </div>
    </div>
  )
}
export const BottomSheet = ({ data: { battery = {}, timestamp = '' } }) => {
  const time = moment(timestamp).locale('th')
  const { is_charging, level } = battery
  const batteryStatus = is_charging ? 'ชาร์จอยู่' : ''
  const batteryLevel = Math.round(level * 100)

  return (
    <div className="flex flex-col h-full">
      <div className="px-8 pt-8">
        {timestamp && (
          <DescItem
            icon={<PinIcon />}
            title="ตำแหน่งล่าสุด"
            secondLine={time.fromNow()}
          />
        )}
        {battery && (
          <DescItem
            icon={<BoltIcon />}
            title={`แบตเตอรี่ ${batteryLevel}% ${batteryStatus}`}
          />
        )}
      </div>
    </div>
  )
}
