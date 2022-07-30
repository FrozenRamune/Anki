from django.utils.deprecation import MiddlewareMixin
from django.http import HttpResponseRedirect
from django.shortcuts import redirect, reverse

PUBLIC_PAGE = ['/accounts/', '/social-auth/', '/admin/']

class LoginRquiredMiddleware(MiddlewareMixin):
    def process_response(self, request, response):
        if not any([request.path.startswith(s) for s in PUBLIC_PAGE]) or request.path.startswith('/accounts/home/'):
            if not request.user.is_authenticated:
                return redirect(reverse('accounts:login') + '?next=' + request.path)
            if 'next' in request.GET:
                return redirect(request.GET['next'])
        if request.path == '/accounts/login/' and request.user.is_authenticated:
            return redirect('/accounts/home/')
        return response
