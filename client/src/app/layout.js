import '../styles/globals.css'


export const metadata = {
  title: 'Ecommerce Application',
  description: 'A platform to sell things',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-Popins">{children}</body>
    </html>
  )
}
