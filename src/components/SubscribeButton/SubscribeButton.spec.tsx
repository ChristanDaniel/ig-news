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

    it('redorects iser tp sign in when not authenticated', () => {
        const signInMocked = mocked(signIn)

        const useSessionMocked = mocked(useSession)
        useSessionMocked.mockReturnValueOnce([null, false])

        render(<SubscribeButton />)

        const subscribeButton = screen.getByText('Subscribe now');

        fireEvent.click(subscribeButton)

        expect(signInMocked).toHaveBeenCalled()
    });

    it('Redirects to posts when user already has a subscription', () => {
        const useRouterMocked = mocked(useRouter)
        const useSessionMocked = mocked(useSession)
        const pushMock = jest.fn()

        useSessionMocked.mockReturnValueOnce([
            { 
                user: { 
                    name: 'John doe',
                    email: 'john.doe@example.com'
                }, 
                activeSubscription: 'fake-active-subscriction',
                expires: 'fake-expires'
            },
                false
        ])

        useRouterMocked.mockReturnValueOnce({
            push: pushMock
        } as any)

        render(<SubscribeButton />)

        const subscribeButton = screen.getByText('Subscribe now');

        fireEvent.click(subscribeButton)

        expect(pushMock).toHaveBeenLastCalledWith('/posts')

    })

})