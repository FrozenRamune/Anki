from django.urls import path, re_path
from . import views
import re

app_name = 'accounts'
urlpatterns = [
    path('', views.home, name='home'),
    path('todo/', views.home, name='todo'),
    re_path(r'', views.home),
]