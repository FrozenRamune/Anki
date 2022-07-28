from django.db import models
from django.contrib.auth.models import AbstractUser

class AnkiUser(AbstractUser):
    nickname = models.CharField(max_length=15, blank=True)
    setted_nickname = models.BooleanField(default=False)
