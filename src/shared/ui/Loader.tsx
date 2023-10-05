import { ReactNode } from 'react'

type LoaderProps = {
  children: ReactNode
}

export const Loader = ({ children }: LoaderProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-xl text-slate">
      <i className="i-lucide-loader-2 animate-spin text-3xl" />
      {children}
    </div>
  )
}
