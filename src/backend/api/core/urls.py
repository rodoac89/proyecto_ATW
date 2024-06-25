from django.urls import path
from api.core.apiviews import Persona
urlpatterns = [
    # Load data
    path('saludo/', Persona.as_view()),


]
