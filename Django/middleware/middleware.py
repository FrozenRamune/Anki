from django.utils.deprecation import MiddlewareMixin
from django.http import JsonResponse, HttpResponseRedirect
from django.shortcuts import redirect, reverse
import re
import json

PUBLIC_PAGE = [r'/accounts(/|$).*', r'/social-auth(/|$).*', r'/admin(/|$).*']

class LoginRquiredMiddleware(MiddlewareMixin):
    def process_response(self, request, response):
        if request.path.endsWith('/'):
            if '?' in request.get_full_path:
                
        if re.match(r'/api(/|$).*', request.path) is not None:
            if request.method == "POST":
                print('api called')
                if not request.user.is_authenticated:
                    return JsonResponse({}, status=401)
                return response
        if not any([re.match(s, request.path) is not None for s in PUBLIC_PAGE]):
            print(request.path)
            if not request.user.is_authenticated:
                return redirect(reverse('accounts:signin') + '?next=' + request.path)
            if 'next' in request.GET:
                return redirect(request.GET['next'])
        if request.path.startswith('/accounts/signin') and request.user.is_authenticated:
            return redirect('home:home')
        return response
