import { setHotels, startLoadingHotels } from "../slices/hotels_slice"



export const getHotels = () => {
    return ( dispatch, getState ) => {
        dispatch( startLoadingHotels() )

        // TODO: Make Fetch

        // dispatch( setHotels() )
    }
}