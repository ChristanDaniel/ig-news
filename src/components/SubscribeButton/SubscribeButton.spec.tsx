import { render, screen, fireEvent } from '@testing-library/react'
import { signIn, useSession } from 'next-auth/client'
import { SubscribeButton } from '.'
import { mocked } from 'ts-jest/utils'
import { useRouter } from 'next/router'


jest.mock('next-auth/client')

jest.mock('next/router')

describe('SubscribeButton Component', () => {

    it('renders correctly', () => {
        const useSessionMocked = mocked(useSession)

        useSessionMocked.mockReturnValueOnce([null, false])

        render(<SubscribeButton />)
        expect(screen.getByText('Subscribe now')).toBeInTheDocument()
    })

})