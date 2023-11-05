import { Card } from '../../../../src/components/Card/Card'

export const CardLoader = () => {
  return (
    <Card>
      <div className="animate-pulse">
        <span className="block w-full h-60 bg-cu-black-100"></span>
        <div className="p-6 space-y-3">
          <span className="block w-11/12 h-4 rounded-md bg-cu-black-100"></span>
          <span className="block w-6/12 h-4 rounded-md bg-cu-black-100"></span>
          <span className="block w-full h-16 rounded-md bg-cu-black-100"></span>
          <span className="block w-4/12 h-3 -mt-3 rounded-md bg-cu-black-100"></span>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </Card>
  )
}