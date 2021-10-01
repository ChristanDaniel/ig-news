import { render, screen } from '@testing-library/react'
import { Header } from '.'

jest.mock('next/dist/client/router', () => {
    return {
        useRouter() {
            return {
                asPath: '/'
            }
        }
    }
})

jest.mock('next-auth/client', () => {
    return {
        useSession() {
            return [null, false]
        }
    }
})

describe('Header Component', () => {
    test('active link is receiving active class', () => {
        render(
            <Header />
        )
    
        expect(screen.getByText('Home')).toBeInTheDocument()
        expect(screen.getByText('Posts')).toBeInTheDocument()
    })

})