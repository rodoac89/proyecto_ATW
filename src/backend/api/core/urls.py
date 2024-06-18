from django.urls import path
from api.core.apiviews import Saludo
urlpatterns = [
    # Load data
    path('saludo/', Saludo.as_view()),


]
