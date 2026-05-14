'use client'

import { Toast } from '@base-ui/react/toast'

const toastManager = Toast.createToastManager()

export { toastManager }

export function Toaster() {
  return (
    <Toast.Provider toastManager={toastManager}>
      <Toast.Viewport className="fixed bottom-4 right-4 z-[100] flex w-full max-w-sm flex-col gap-2 outline-none" />
    </Toast.Provider>
  )
}
