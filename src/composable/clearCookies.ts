import cookie from '@point-hub/vue-cookie'

export default function clearCookies() {
    try {
        cookie.remove("accessToken");
        cookie.remove("refreshToken");
        cookie.remove("id");
    } catch (error) {
        console.log(error);
    }
}