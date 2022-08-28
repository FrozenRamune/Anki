from django.shortcuts import render
import socketio

async_mode = 'gevent'

sio = socketio.Server(async_mode=async_mode)

def game(request):
    return render(request, 'match/index.html')
