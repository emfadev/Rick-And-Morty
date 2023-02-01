import React from 'react'

export const Header = prosp => {
  return (
    <div>{prosp.isLogin ? 'Estas logiado papu' : 'Logn please'}</div>
  )
}
