import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    checkingPayment: false,
    oldBooking: {},
    rateK: '',
    user_bookings: [],
    hotel: {},
    confirmation: {},
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
        startCheckingPayment: (state) => {
            state.checkingPayment = true
        },
        endCheckingPayment: (state) => {
            state.checkingPayment = false
        },
        setBookingState: (state, { payload }) => {
            state.oldBooking = payload.booking
            state.rateK = payload.rateKey
        },
        setHotel: (state, { payload }) => {
            state.hotel = payload
        },
        setConfirmation: (state, { payload }) => {
            state.confirmation = payload
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
        },
        setUserBookings: (state, {payload}) => {
            state.user_bookings = payload
        }
    }
})

// Action creators are generated for each case reducer function
export const {
    startCheckingPayment,
    endCheckingPayment,
    setBookingState,
    setHotel,
    setConfirmation,
    setholderBook,
    setRoom,
    setUserBookings
} = bookingSlice.actions