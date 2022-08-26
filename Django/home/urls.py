from django.urls import path, re_path
from . import views

app_name = 'accounts'
urlpatterns = [
    path('', views.home, name='home'),
    re_path(r'', views.home),
]