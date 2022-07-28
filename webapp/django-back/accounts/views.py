from django.shortcuts import render
from django.contrib.auth.decorators import login_required

def login(request):
    return render(request, 'accounts/login.html', { 'next': '?next=' + request.GET['next'] if 'next' in request.GET else ''})

def setting_nickname(request):
    return HttpResponse("OK")

def home(request):
    return render(request, 'accounts/home.html')