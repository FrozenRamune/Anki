from django import forms

class NicknameForm(forms.Form):
    nickname = forms.CharField(max_length=15)
