from django.shortcuts import render
import socketio

async_mode = 'gevent'

sio = socketio.Server(async_mode=async_mode)

def game():
    pass
