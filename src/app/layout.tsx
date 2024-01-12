import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jinvani GPT',
  description: "The cutting-edge chatbot that seamlessly integrates Jain wisdom into your daily life. Our AI-powered solution is more than just a chatbot; it's your digital companion, offering personalized guidance and solutions aligned with the profound teachings of Jain Jinvani, scriptures, and granths. Navigate life's challenges with a touch of spirituality, fostering a harmonious balance between tradition and technology. Experience the transformative power of JinvaniGPT, where every solution is a reflection of timeless Jain principles. Embrace holistic well-being and ethical living with our uniquely tailored approach. Explore the future of spiritual connectivity at your fingertips.",
  icons: {
    icon: "https://github-production-user-asset-6210df.s3.amazonaws.com/86917304/296347212-be3a4a3d-0ca4-4df2-b556-a005a4cf61cb.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240112%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240112T194938Z&X-Amz-Expires=300&X-Amz-Signature=02bbb9a62f75e906f649f11da1fde72dfde98a49b42ab2dd87a728cddfbcdb55&X-Amz-SignedHeaders=host&actor_id=86917304&key_id=0&repo_id=643782610",
    shortcut: "https://github-production-user-asset-6210df.s3.amazonaws.com/86917304/296347212-be3a4a3d-0ca4-4df2-b556-a005a4cf61cb.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240112%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240112T194938Z&X-Amz-Expires=300&X-Amz-Signature=02bbb9a62f75e906f649f11da1fde72dfde98a49b42ab2dd87a728cddfbcdb55&X-Amz-SignedHeaders=host&actor_id=86917304&key_id=0&repo_id=643782610",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/c/c9/Jainism.svg" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
