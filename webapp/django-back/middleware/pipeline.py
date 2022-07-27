from social_core.exceptions import AuthForbidden, AuthException

def validate_email(backend, details, response, *args, **kwargs):
    if not response or 'email' not in response:
        raise AuthException(backend, 'email dose not exists')
    domain = response['email'].split('@')[1]
    print(domain)
    if domain != 'class.hakuryo.ed.jp':
        raise AuthForbidden(backend)