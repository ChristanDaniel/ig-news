import { render, screen} from '@testing-library/react'
import { ActiveLink } from '.'

jest.mock('next/dist/client/router', () => {
    return {
        useRouter() {
            return {
                asPath: '/'
            }
        }
    }
})

describe('ActiveLink Component', () => {
    test('active Link renders correctly', () => {
        render(
            <ActiveLink href="/" activeClassName="active">
                <a>Home</a>
            </ActiveLink>
        )
    
        expect(screen.getByText('Home')).toBeInTheDocument()
    })
    
    test('active link is receiving active class', () => {
        render(
            <ActiveLink href="/" activeClassName="active">
                <a>Home</a>
            </ActiveLink>
        )
    
        expect(screen.getByText('Home')).toHaveClass('active')
    })
})


