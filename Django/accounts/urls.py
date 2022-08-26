from django.urls import path, re_path, include
from django.contrib.auth import views as auth_views
from django.views.generic import RedirectView
from . import views

app_name = 'accounts'
urlpatterns = [
    re_path(r'^signin/?', views.login, name='signin'),
    re_path(r'^signout/?', auth_views.LogoutView.as_view(), name='signout'),
    re_path(r'^set_nickname/?', views.get_nickname, name='set_nickname'),
    re_path(r'', RedirectView.as_view(url='/accounts/signin'))
]