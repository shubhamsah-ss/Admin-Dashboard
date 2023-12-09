import './global.css'

export const metadata = {
  title: 'Admin Dashboard',
  description: 'Created by DEVSS',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
