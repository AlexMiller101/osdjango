from django.contrib import admin
from django.urls import path
from .views import home
from OS.views import indexOS, folders

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', indexOS),
    path('folders/<id>/', folders),
]
