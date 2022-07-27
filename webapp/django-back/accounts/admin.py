from django.contrib import admin
from django.contrib.auth import get_user_model

AnkiUser = get_user_model()

admin.site.register(AnkiUser)
