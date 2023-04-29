from django.shortcuts import render
from django.urls import reverse_lazy
from django.contrib.auth.forms import UserCreationForm
from django.views.generic.edit import CreateView

def catalog(request):
    return render(request, "users/catalog.html")

def pro(request):
    return render(request, "users/pro.html")

def index(request):
    return render(request, "users/index.html")

def tovar(request):
    return render(request, "users/str-tovar.html")

class SignUp(CreateView):
    form_class = UserCreationForm
    success_url = reverse_lazy("login")
    template_name = "registration/signup.html"
