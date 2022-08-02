from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import redirect, reverse
from .forms import NicknameForm

def login(request):
    return render(request, 'accounts/login.html', { 'next': '?next=' + request.GET['next'] if 'next' in request.GET else ''})

def get_nickname(request):
    if request.method == 'POST':
        form = NicknameForm(request.POST)
        if form.is_valid():
            request.session['nickname'] = form.cleaned_data['nickname']
            return redirect(reverse('social:complete', args=["google-oauth2"]))
    else:
        form = NicknameForm()
    return render(request, "accounts/nickname_form.html", context={'form': form})
