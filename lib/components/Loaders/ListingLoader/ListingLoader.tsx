import { Listing } from '../../Listing/Listing'

export const ListingLoader = () => {
  return (
    <Listing>
      <Listing.Body>
        <div className="animate-pulse">
          <div className="flex flex-col @lg:md:flex-row gap-5 @lg:md:gap-7 h-full">
            <div className="flex flex-col flex-1 gap-3">
              <span className="block h-8 rounded-md w-72 bg-cu-black-100"></span>
              <span className="block h-4 rounded-md w-12/12 bg-cu-black-100"></span>
              <span className="block w-11/12 h-4 mb-2 rounded-md bg-cu-black-100"></span>
              <span className="block h-12 mt-auto rounded-md w-28 bg-cu-black-100"></span>
            </div>
          </div>
        </div>
        <span className="sr-only">Loading...</span>
      </Listing.Body>
    </Listing>
  )
}
