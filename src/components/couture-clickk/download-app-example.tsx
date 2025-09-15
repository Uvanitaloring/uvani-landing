import React from 'react'
import DownloadApp from './download-app'

export function DownloadAppExample() {
  return (
    <div className="p-6 bg-gray-50 rounded-md">
      <DownloadApp
        title="Get the UVANI app"
        description="Download the Android APK directly to install the UVANI beta. iOS support is coming soon — sign up to be notified when we launch on the App Store."
        downloadUrl="/downloads/uvani-latest.apk"
      />
    </div>
  )
}

export default DownloadAppExample
