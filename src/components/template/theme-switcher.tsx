'use client'


import { useTheme } from 'next-themes'
import React from 'react'
import ButtonSwitcher from './ButtonSwitcher'

export default function ThemeSwitcher() {
    const {setTheme} = useTheme()

  return (
    <div>
     <button onClick={() => setTheme('light')}>Light</button> <br />
      ou <br />
      <button onClick={() => setTheme('dark')}>Dark</button> 
   


    </div>
  )
}
