'use client' // Error boundaries must be Client Components
import NotFoundPage from "@/components/NotFoundPage";
import Link from "next/link";
 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <NotFoundPage />
      </body>
    </html>
  )
}