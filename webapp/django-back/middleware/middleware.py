from django.utils.deprecation import MiddlewareMixin
from django.http import HttpResponseRedirect

LOGIN_PAGE = ['/accounts/', '/accounts/login/', '/accounts/logout/']

class LoginRquiredMiddleware(MiddlewareMixin):
    def process_response(self, request, response):
        if (request.path not in LOGIN_PAGE and not request.path.startswith('/social-auth')) and not request.user.is_authenticated:
            return HttpResponseRedirect('/accounts/login/?redirect='+request.path)
        if request.path == '/accounts/login/' and request.user.is_authenticated:
            return HttpResponseRedirect('/accounts/home/')
        if 'next' in request.GET:
            return HttpResponseRedirect(request.GET['next'])
        return response