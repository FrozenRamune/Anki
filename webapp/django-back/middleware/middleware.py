from django.utils.deprecation import MiddlewareMixin
from django.http import HttpResponseRedirect

PUBLIC_PAGE = ['/accounts/', '/social-auth/', '/admin/']

class LoginRquiredMiddleware(MiddlewareMixin):
    def process_response(self, request, response):
        if not any([request.path.startswith(s) for s in PUBLIC_PAGE]):
            if not request.user.is_authenticated:
                return HttpResponseRedirect('/accounts/login/?next='+request.path)
            if 'next' in request.GET:
                return HttpResponseRedirect(request.GET['next'])
            if request.user.setted_nickname:
                return HttpResponseRedirect('/accounts/setting_nickname/?next='+request.path)
        if request.path == '/accounts/login/' and request.user.is_authenticated:
            return HttpResponseRedirect('/accounts/home/')
        return response
