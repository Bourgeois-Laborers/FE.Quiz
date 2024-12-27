import Cookies from 'universal-cookie'

const useCookies = () => {
    const cookies = new Cookies(null, { path: '/' })

    const setCookie = (name: string, value: string): void => {
        cookies.set(name, value)
    }

    const getCookie = (name: string): void => {
        return cookies.get(name)
    }

    const removeCookie = (name: string): void => {
        cookies.remove(name)
    }

    return {
        setCookie,
        getCookie,
        removeCookie,
    }
}

export default useCookies
