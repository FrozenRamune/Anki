from django.urls import path, re_path, include
from django.contrib.auth import views as auth_views
from django.views.generic import RedirectView
from . import views

app_name = 'accounts'
urlpatterns = [
    path('signin/', views.login, name='signin'),
    path('signout/', auth_views.LogoutView.as_view(), name='signout'),
    path('set_nickname/', views.get_nickname, name='set_nickname'),
    path('', RedirectView.as_view(url='/accounts/signin'))
]