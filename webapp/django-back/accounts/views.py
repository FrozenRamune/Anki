from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def index(request):
    print('OK')
    return HttpResponse("Hello, world. You're at the react_app index.")