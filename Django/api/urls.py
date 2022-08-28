from django.urls import path, re_path
from . import views

app_name = 'accounts'
urlpatterns = [
    path('import/', views.import_contents, name='import'),
    #re_path(r'^test/?', views.test, name='test'),
]