import React, { useState, useEffect } from 'react'
import { Text } from '../Text'

function Time(): JSX.Element {
  const [fechaHora, setFechaHora] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFechaHora(new Date())
    }, 1000)
    return () => clearInterval(intervalId)
  }, [])

  const optionsFecha: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }
  const optionsHora: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }

  return (
    <div className="flex absolute right-0 bottom-0 mr-2 gap-2">
      <Text color="white">
        {fechaHora.toLocaleDateString('es-ES', optionsFecha)}
      </Text>
      <Text color="white">
        {fechaHora.toLocaleTimeString('en-US', optionsHora)}
      </Text>
    </div>
  )
}

export default Time
