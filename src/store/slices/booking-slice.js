import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    oldBooking: {},
    rateK: '',
    hotel: {},
    book: {
        holder: {},
        // paymentData: {
        //     paymentCard: {
        //         cardType: 'VI',
        //         cardNumber: '4444333322221111',
        //         cardHolderName: 'Alberto Rodriguez Garcia',
        //         expiryDate: '0126',
        //         cardCVC: '869'
        //     },
        //     contactData: {}
        // },
        rooms: [],
        clientReference: 'FunTravelsAgency',
        tolerance: 2
    }
}

export const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
        setBookingState: (state, { payload }) => {
            state.oldBooking = payload.booking
            state.rateK = payload.rateKey
        },
        setHotel: (state, { payload }) => {
            state.hotel = payload
        },
        setholderBook: (state, { payload }) => {
            state.book.holder = {
                name: payload.name,
                surname: payload.surname
            }
            // state.book.paymentData.contactData = {
            //     email: payload.email,
            //     phoneNumber: payload.phone
            // }
        },
        setRoom: (state, { payload }) => {
            state.book.rooms = [{
                rateKey: payload.rateKey,
                paxes: [{
                    roomId: 1,
                    type: 'AD',
                    name: "Alberto",
                    surname: "Rodriguez"
                }]
            }]
        }
    }
})

// Action creators are generated for each case reducer function
export const {
    setBookingState,
    setHotel,
    setholderBook,
    setRoom
} = bookingSlice.actions