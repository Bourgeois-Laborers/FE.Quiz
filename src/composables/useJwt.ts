import { jwtDecode } from 'jwt-decode'

const useJwt = () => {
    const decode = <T>(token: string) => {
        return jwtDecode<T>(token)
    }

    return {
        decode,
    }
}

export default useJwt
