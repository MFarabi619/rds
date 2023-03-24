import { Combobox } from '@headlessui/react'
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

export interface LocationPickerProps {
  posCallback?: any
  centerCallback?: any
  singleMarker?: boolean
  singleMarkerCallback?: any
}

export const LocationPicker = ({
  posCallback,
  centerCallback,
  singleMarker,
  singleMarkerCallback,
}: LocationPickerProps) => {
  const [address, setAddress] = useState('')
  const [center, setCenter] = useState<{ lat: number; lng: number }>({
    lat: 45.3850225,
    lng: -75.6946679,
  })
  const [pos, setPos] = useState<{ name: string; id: string; position: object }[]>([])
  const [coordinates, setCoordinates] = useState({
    lat: 45.3850225,
    lng: -75.6946679,
  })

  const handleSelect = async (value: string) => {
    const results = await geocodeByAddress(value)
    const latLng = await getLatLng(results[0])
    const placeID = results[0].place_id
    setAddress(value)
    setCenter({ lat: latLng.lat, lng: latLng.lng })
    setPos([...pos, { name: value, id: placeID, position: latLng }])
    setCoordinates(latLng)
  }

  useEffect(() => {
    if (posCallback) posCallback(pos)
  }, [pos, posCallback])

  useEffect(() => {
    if (centerCallback) centerCallback(center)
  }, [center, centerCallback])

  useEffect(() => {
    if (singleMarker && singleMarkerCallback) singleMarkerCallback({ coordinates, address: address })
  }, [coordinates, singleMarkerCallback, singleMarker])

  return (
    <div className="not-prose">
      <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}>
        {({ getInputProps, suggestions, getSuggestionItemProps }) => (
          <Combobox value={address} onChange={handleSelect}>
            <div className="relative">
              <MagnifyingGlassIcon
                className="pointer-events-none absolute top-3.5 left-3.5 h-5 w-5 text-cu-black-400"
                aria-hidden="true"
              />
              <Combobox.Input
                className="h-12 w-full rounded-lg border border-cu-black-200 bg-white pl-10 pr-4 text-cu-black-800 placeholder-cu-black-400 focus:border-cu-black-400 focus:outline-none focus:ring-0 sm:text-sm"
                {...getInputProps({ placeholder: 'Type address' })}
              />
              {address && (
                <XMarkIcon
                  className="absolute top-3.5 right-3.5 h-5 w-5 text-cu-black-400"
                  aria-hidden="true"
                  onClick={() => {
                    setAddress('')
                  }}
                />
              )}
            </div>
            <Combobox.Options className="mt-3 max-h-80 divide-y divide-cu-black-100 overflow-y-auto bg-white px-1.5 text-sm text-cu-black-800">
              {suggestions.map((suggestion) => {
                return (
                  <Combobox.Option key={suggestion.index} value={suggestion}>
                    {({ active }) => (
                      <ul>
                        <li
                          {...getSuggestionItemProps(suggestion)}
                          className={`p-4 text-cu-black-600 hover:cursor-pointer ${
                            active ? 'bg-cu-black-50 text-cu-black-900' : 'bg-white'
                          }`}
                        >
                          {suggestion.description}
                        </li>
                      </ul>
                    )}
                  </Combobox.Option>
                )
              })}
            </Combobox.Options>
          </Combobox>
        )}
      </PlacesAutocomplete>
    </div>
  )
}
