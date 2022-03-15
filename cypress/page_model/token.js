import { boohooGroupToken } from "../support/apiKeys";
import { tokenUrl } from "../support/routes";

export const Token = {
    method: 'POST',
    //url: 'https://aks-feature.sorted.com/auth/connect/token',
    url: tokenUrl,
    form: true,
    body: {
        client_id: 'api-m-dev',
        client_secret: 'Ct32K8K6SnztbtW9JWu4ZnGLuhgBnkHsKxcmJwJrMZ49CmcwyqNq7zNJL2HJ9QRX',
        grant_type: 'apikey_delegation',
        apikey: 'YjM5MDMxMjdlMmY3NDYwMWFiNWU3YTZhZjhiNTU0OWM='
    }
}
export const Token2 = {
    method: 'POST',
    //url: 'https://aks-feature.sorted.com/auth/connect/token',
    url: tokenUrl,
    form: true,
    body: {
        client_id: 'api-m-dev',
        client_secret: 'Ct32K8K6SnztbtW9JWu4ZnGLuhgBnkHsKxcmJwJrMZ49CmcwyqNq7zNJL2HJ9QRX',
        grant_type: 'apikey_delegation',
        //apikey: 'YjM5MDMxMjdlMmY3NDYwMWFiNWU3YTZhZjhiNTU0OWM='
        apikey: boohooGroupToken
    }
}