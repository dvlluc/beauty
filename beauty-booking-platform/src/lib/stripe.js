import { loadStripe } from '@stripe/stripe-js'

const stripePublicKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY || 'pk_test_your_key_here'

export const stripePromise = loadStripe(stripePublicKey)

export default stripePromise
