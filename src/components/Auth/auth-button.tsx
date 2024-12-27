"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { AuthDialog } from './auth-dialog'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/lib/store'
import { logout } from '@/lib/store/slices/authSlice'

export function AuthButton() {
  const [showDialog, setShowDialog] = useState(false)
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()

  if (isAuthenticated && user) {
    return (
      <Button
        variant="ghost"
        onClick={() => dispatch(logout())}
      >
        Sign Out
      </Button>
    )
  }

  return (
    <>
      <Button
        variant="ghost"
        onClick={() => setShowDialog(true)}
      >
        Sign In
      </Button>
      <AuthDialog
        isOpen={showDialog}
        onClose={() => setShowDialog(false)}
      />
    </>
  )
}