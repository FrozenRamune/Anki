from social_core.exceptions import AuthForbidden, AuthException
from django.shortcuts import redirect, reverse
from social_core.pipeline.partial import partial
from django.http import HttpResponseRedirect

def validate_email(backend, details, response, *args, **kwargs):
    if not response or 'email' not in response:
        raise AuthException(backend, 'email dose not exists')
    domain = response['email'].split('@')[1]
    print(domain)
    if domain != 'class.hakuryo.ed.jp':
        raise AuthForbidden(backend)

@partial
def set_nickname(strategy, backend, request, details, user, *args, **kwargs):
    if not user.setted_nickname:
        nickname = strategy.session_get('nickname', None)
        if not nickname:
            return redirect(reverse("accounts:set_nickname"))
        user.nickname = nickname
        user.setted_nickname = True
        user.save()
    return
