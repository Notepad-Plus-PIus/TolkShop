from django.urls import path
from . import views

urlpatterns = [

    path('', views.catalog, name = "catalog"),
    path("signup/", views.SignUp.as_view(), name="signup"),
    path('pro/', views.pro, name = "pro"),
    path('index/', views.index, name = "index"),
    path('tovar/', views.tovar, name = "tovar"),
]

