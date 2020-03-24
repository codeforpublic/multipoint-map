import { css } from '@emotion/core'
import { useEffect, useState } from 'react'
import GoogleMapReact from 'google-map-react'

import { MAP_RADIUS, COLORS } from './const'

const MAP_API_KEY =
  process.env.NODE_ENV === 'production'
    ? 'AIzaSyDlxiOwtfimu8TlLAytRturthsRY0z3ILo'
    : 'AIzaSyB4KPmHPc-5vbPZWSLODnJa-dVv-hWwYgk'

export const GoogleMap = ({
  radius = MAP_RADIUS,
  center = {
    lat: 13.756331,
    lng: 100.501762
  },
  datas,
  setSelected,
  selectedId
}) => {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{
        key: MAP_API_KEY
      }}
      defaultCenter={center}
      defaultZoom={11}
      yesIWantToUseGoogleMapApiInternals={true}
    >
      {datas.map(o => (
        <div lat={o.lat} lng={o.lng}>
          <div
            className={`rounded-full w-4 h-4 shadow`}
            style={{
              border: '2px solid white',
              background: o.id === selectedId ? COLORS.BLUE : COLORS.ORANGE
            }}
            onClick={() => setSelected(o)}
          />
        </div>
      ))}
    </GoogleMapReact>
  )
}
