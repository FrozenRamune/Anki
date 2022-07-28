from django.urls import path, include
from django.contrib.auth import views as auth_views
from django.views.generic import RedirectView
from . import views

app_name = 'accounts'
urlpatterns = [
    path('login/', views.login, name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    path('setting_nickname', views.setting_nickname, name='setting_nickname'),
    path('', RedirectView.as_view(url='login')),
    path('home/', views.home),
]