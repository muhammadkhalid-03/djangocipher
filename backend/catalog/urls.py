from django.urls import path, include
from .router import router

app_name = 'catalog'

urlpatterns = [
    path('', include(router.urls)),
]
